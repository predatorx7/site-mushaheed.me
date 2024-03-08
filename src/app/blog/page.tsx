import { PeakBlog } from "@/components/blog/peak_blog";
import { getBlogPosts } from "@/db/blog";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default function BlogPage() {
  const allBlogs = getBlogPosts();

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Read my Blog
      </h1>
      {allBlogs.map((post) => (
        <PeakBlog key={post.slug} data={post} />
      ))}
    </section>
  );
}
