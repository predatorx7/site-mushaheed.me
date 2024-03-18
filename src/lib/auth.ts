import authConfig from "./config/auth";
import { GitHub, Google } from "arctic";
import { BASE_URL } from "./constants";
import { Lucia } from "lucia";
import { NodePostgresAdapter } from "@lucia-auth/adapter-postgresql";
import { pool } from "@/db/connection";

export const oauthProviders = {
  github: new GitHub(
    authConfig.OAUTH_GITHUB.CLIENT_KEY,
    authConfig.OAUTH_GITHUB.CLIENT_SECRET,
  ),
  google: new Google(
    authConfig.OAUTH_GOOGLE.CLIENT_KEY,
    authConfig.OAUTH_GOOGLE.CLIENT_SECRET,
    `${BASE_URL}/api/auth/google/callback`,
  ),
};

const adapter = new NodePostgresAdapter(pool, {
  user: "auth_user",
  session: "user_session",
});

export const lucia = new Lucia(adapter, {
  sessionCookie: {
    // this sets cookies with super long expiration
    // since Next.js doesn't allow Lucia to extend cookie expiration when rendering pages
    expires: false,
    attributes: {
      // set to `true` when using HTTPS
      secure: process.env.NODE_ENV === "production",
    },
  },
  getUserAttributes: (attributes) => {
    return attributes;
  },
});

// IMPORTANT!
declare module "lucia" {
  interface Register {
    Lucia: typeof lucia;
    DatabaseUserAttributes: AuthUserAttributes;
  }
}

export interface AuthUserAttributes {
  id: string;
  oauth_type: string;
  oauth_user_id: string;
  username: string;
  extra: Record<string, any>;
}
