import { getComments } from "@/db/comments";
import { Suspense } from "react";
import CommentForm from "./comment-form";
import { SignIn, SignOut } from "@/app/guestbook/buttons";
import { validateRequest } from "@/lib/auth-action";

export default async function Comments({ slug }: { slug: string }) {
  return (
    <section className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
      <h2 className="font-medium text-2xl mb-2 tracking-tighter">Comments</h2>
      <Suspense fallback={<p>Loading comments...</p>}>
        <CommentSection slug={slug} />
      </Suspense>
    </section>
  );
}

async function CommentSection({ slug }: { slug: string }) {
  const session = await validateRequest();
  const isAuthenticated = !!session.user;

  return (
    <div>
      <CommentForm slug={slug} isAuthenticated={isAuthenticated} />

      {!isAuthenticated ? (
        <div className="mb-8">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
            You are commenting anonymously. Or sign in to use your account:
          </p>
          <SignIn />
        </div>
      ) : (
        <SignOut />
      )}

      <div className="mt-8">
        <CommentEntries slug={slug} />
      </div>
    </div>
  );
}

async function CommentEntries({ slug }: { slug: string }) {
  try {
    const entries = await getComments(slug);

    if (entries.length === 0) {
      return <p className="text-sm text-neutral-600 dark:text-neutral-400">No comments yet. Be the first!</p>;
    }

    return entries.map((entry) => (
      <div key={entry.id} className="flex flex-col space-y-1 mb-4">
        <div className="w-full text-sm break-words">
          <span className="font-medium text-neutral-800 dark:text-neutral-200 mr-2">
            {entry.name}
          </span>
          <span className="text-neutral-500 text-xs">
            {new Date(entry.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <p className="text-neutral-600 dark:text-neutral-400 mt-1">
            {entry.body}
          </p>
        </div>
      </div>
    ));
  } catch (error) {
    console.error(error);
    return (
      <p className="text-red-500">
        Could not load comments. Please refresh.
      </p>
    );
  }
}
