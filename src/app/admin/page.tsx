import { redirect } from "next/navigation";
import Form from "./form";
import { getGuestbookEntries, deleteGuestbookEntries } from "@/db/guestbook";
import { getAllComments, deleteComments } from "@/db/comments";
import { validateRequest } from "@/lib/auth-action";

export const metadata = {
  title: "Admin",
};

export default async function GuestbookPage() {
  "use server";
  let session = await validateRequest();
  if (
    !session ||
    !session.user ||
    !(
      session.user.oauth_type === "github" &&
      session.user.username === "predatorx7"
    )
  ) {
    redirect("/");
  }

  let entries = await getGuestbookEntries();
  let comments = await getAllComments();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">admin</h1>
      <Form entries={entries} deleteAction={deleteGuestbookEntries} title="Guestbook Entries" />
      <Form entries={comments} deleteAction={deleteComments} title="Blog Comments" />
    </section>
  );
}
