"use server";

import {
  unstable_noStore as noStore,
  revalidatePath,
} from "next/cache";
import { KNEX_CONNECTION } from "./connection";
import { validateRequest } from "@/lib/auth-action";

export type BlogCommentData = {
  id: string;
  slug: string;
  body: string;
  name: string;
  created_by: string | null;
  created_at: string;
};

export const getComments = async (slug: string) => {
  noStore();
  return await KNEX_CONNECTION.select<BlogCommentData[]>([
    "id",
    "slug",
    "body",
    "name",
    "created_by",
    "created_at",
  ])
    .from("blog_comments")
    .where("slug", slug)
    .orderBy("created_at", "desc")
    .limit(100);
};

export const saveComment = async (formData: FormData, slug: string) => {
  const session = await validateRequest();

  let name = "";
  let created_by = null;

  if (session.user) {
    name = (session.user?.extra?.name as string) ?? session.user?.username;
    created_by = session.user.id;
  } else {
    name = formData.get("name")?.toString()?.trim() || "Anonymous";
  }

  const entry = formData.get("body")?.toString() || "";
  const body = entry.slice(0, 2000);

  if (!body.trim()) {
    throw new Error("Comment cannot be empty");
  }

  await KNEX_CONNECTION("blog_comments").insert({
    slug,
    name,
    body,
    created_by,
  });

  revalidatePath(`/blog/${slug}`);
};

export const getAllComments = async () => {
  noStore();
  return await KNEX_CONNECTION.select<BlogCommentData[]>([
    "id",
    "slug",
    "body",
    "name",
    "created_by",
    "created_at",
  ])
    .from("blog_comments")
    .orderBy("created_at", "desc");
};

export const deleteComments = async (deleteIds: string[]) => {
  await KNEX_CONNECTION.from("blog_comments")
    .delete()
    .whereIn("id", deleteIds);
  revalidatePath("/admin");
};
