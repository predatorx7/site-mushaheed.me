"use server";

import {
  unstable_cache as cache,
  unstable_noStore as noStore,
  revalidatePath,
} from "next/cache";
import { KNEX_CONNECTION } from "./connection";
import { validateRequest } from "@/lib/auth-action";

export type GuestBookData = {
  id: string;
  created_by: string;
  name: string;
  body: string;
};

export const getGuestbookEntries = async () => {
  noStore();
  return await KNEX_CONNECTION.select<GuestBookData[]>([
    "id",
    "body",
    "name",
    "created_by",
  ])
    .from("guestbook")
    .orderBy("created_at", "desc")
    // limiting to latest 100
    .limit(100);
};

export const saveGuestbookEntry = async (formData: FormData) => {
  const session = await validateRequest();

  if (!session.user) {
    throw new Error("Unauthorized");
  }

  const name = session.user?.extra?.name as string;
  const created_by = session.user?.username as string;

  const entry = formData.get("entry")?.toString() || "";
  const body = entry.slice(0, 500);

  await KNEX_CONNECTION("guestbook").insert({
    name: name ?? created_by,
    body: body,
    created_by: session.user.id,
  });

  revalidatePath("/guestbook");
};
