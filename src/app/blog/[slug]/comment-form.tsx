"use client";

import { saveComment } from "@/db/comments";
import { useRef } from "react";
import { useFormStatus } from "react-dom";

export default function CommentForm({
  slug,
  isAuthenticated,
}: {
  slug: string;
  isAuthenticated: boolean;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      className="relative flex flex-col space-y-4 max-w-[500px] mb-6"
      ref={formRef}
      action={async (formData) => {
        await saveComment(formData, slug);
        formRef.current?.reset();
      }}
    >
      {!isAuthenticated && (
        <input
          aria-label="Your name"
          placeholder="Name (optional)"
          name="name"
          type="text"
          className="px-4 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
        />
      )}
      <div className="relative">
        <textarea
          aria-label="Your comment"
          placeholder="Write a comment..."
          name="body"
          required
          rows={3}
          className="pl-4 pr-32 py-2 mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 resize-none"
        />
        <SubmitButton />
      </div>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="flex items-center justify-center absolute right-2 bottom-2 px-2 py-1 font-medium h-8 bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100 rounded w-16"
      disabled={pending}
      type="submit"
    >
      Post
    </button>
  );
}
