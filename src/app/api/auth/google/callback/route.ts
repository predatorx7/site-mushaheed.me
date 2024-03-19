import { lucia, oauthProviders } from "@/lib/auth";
import { cookies } from "next/headers";
import { OAuth2RequestError } from "arctic";
import { UserRepository } from "@/db/user";

// http://localhost:3000/api/auth/github/callback?code=9879d6018f9df450fda5&state=gJZOuU5ZAWf7iT0lvMY-LY7j0SBUSQtB1GbThWEewjI
export async function GET(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const storedState = cookies().get("google_oauth_state")?.value ?? null;
  const storedCodeVerifier = cookies().get("google_oauth_code_verifier")?.value;
  if (
    !code ||
    !state ||
    !storedState ||
    state !== storedState ||
    !storedCodeVerifier
  ) {
    console.warn({
      url,
      code,
      state,
      storedState,
      storedCodeVerifier,
    });
    return new Response(null, {
      status: 400,
    });
  }

  try {
    const tokens = await oauthProviders.google.validateAuthorizationCode(
      code,
      storedCodeVerifier,
    );
    const googleUserResponse = await fetch(
      "https://openidconnect.googleapis.com/v1/userinfo",
      {
        headers: {
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      },
    );
    const googleUser: GoogleUser = await googleUserResponse.json();

    console.info({ googleUser });

    let user: UserRepository.User;

    const existingUser = await UserRepository.getUserByProviderUserId(
      "google",
      googleUser.sub,
    );

    if (existingUser) {
      user = existingUser;
    } else {
      const data = await UserRepository.addUser({
        oauth_type: "google",
        oauth_user_id: googleUser.sub,
        username:
          googleUser.name ??
          googleUser.email ??
          googleUser.given_name ??
          "User",
        extra: googleUser,
      });
      if (!data) {
        return new Response(null, {
          status: 401,
          headers: {
            Location: "/",
          },
        });
      }
      user = data;
    }

    const session = await lucia.createSession(user.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    cookies().set(
      sessionCookie.name,
      sessionCookie.value,
      sessionCookie.attributes,
    );
    return new Response(null, {
      status: 302,
      headers: {
        Location: "/",
      },
    });
  } catch (e) {
    console.error(e);
    // the specific error message depends on the provider
    if (e instanceof OAuth2RequestError) {
      // invalid code
      return new Response(null, {
        status: 400,
      });
    }
    return new Response(null, {
      status: 500,
    });
  }
}

interface GoogleUser {
  sub: string;
  name?: string | null;
  email?: string | null;
  given_name?: string | null;
  family_name?: string | null;
  picture?: string | null;
  email_verified?: boolean | null;
}
