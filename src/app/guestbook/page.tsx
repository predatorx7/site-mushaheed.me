import { getGuestbookEntries } from "@/db/guestbook";
import { Suspense } from "react";
import Form from "./form";
import { SignIn, SignOut } from "./buttons";
import { validateRequest } from "@/lib/auth-action";
import { CircularLoading } from "@/components/loading";
import { SpanSeeMore } from "@/components/see_more/span_see_more";

export const metadata = {
  title: "Guestbook",
  description: "Sign my Guestbook and leave your mark.",
};

export default function GuestBookPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-2 tracking-tighter">
        Sign my Guestbook
      </h1>
      <h3 className="font-normal text-sm mb-8 tracking-tighter">
        Leave your mark
      </h3>
      <Suspense fallback={CircularLoading()}>
        <GuestbookForm />
        <GuestbookEntries />
      </Suspense>
    </section>
  );
}

async function GuestbookForm() {
  const session = await validateRequest();

  return session?.user ? (
    <>
      <Form />
      <SignOut />
    </>
  ) : (
    <SignIn />
  );
}

async function GuestbookEntries() {
  try {
    const entries = await getGuestbookEntries();

    if (entries.length === 0) {
      return null;
    }

    return entries.map((entry) => (
      <div key={entry.id} className="flex flex-col space-y-1 mb-4">
        <div className="w-full text-sm break-words">
          <span className="text-neutral-600 dark:text-neutral-400 mr-1">
            {entry.name}:
          </span>
          <SpanSeeMore text={entry.body} />
        </div>
      </div>
    ));
  } catch (error) {
    console.error(error);
    return (
      <>
        <h3>Oh no, something went wrong...</h3>
        <h4>Maybe refresh?</h4>
      </>
    );
  }
}
