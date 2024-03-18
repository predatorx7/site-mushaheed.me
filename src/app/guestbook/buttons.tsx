import { loginUrl, logout } from "@/lib/auth-action";
import Link from "next/link";

export function SignOut() {
  return (
    <form action={logout}>
      <button className="text-xs text-neutral-700 dark:text-neutral-300 mt-2 mb-6">
        Sign out
      </button>
    </form>
  );
}

export function SignIn() {
  return (
    <>
      <div className="flex flex-wrap mb-6">
        <Link
          className="px-3 py-2 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 me-2 mb-2"
          href={loginUrl("github")}
        >
          <img
            alt="GitHub logo"
            src="/icon/github-logo.svg"
            width="20"
            height="20"
          />
          <div className="ml-3">Sign in with GitHub</div>
        </Link>
        <Link
          className="px-3 py-2 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 me-2 mb-2"
          href={loginUrl("google")}
        >
          <img
            alt="Google logo"
            src="/icon/google-logo.svg"
            width="20"
            height="20"
          />
          <div className="ml-3">Sign in with Google</div>
        </Link>
      </div>
    </>
  );
}
