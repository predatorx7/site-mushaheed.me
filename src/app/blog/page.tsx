import { PeakBlog } from "@/components/blog/peak_blog";
import { CircularLoading } from "@/components/loading";
import { getBlogPosts } from "@/db/blog";
import { Suspense } from "react";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

async function _Content() {
  const allBlogs = await getBlogPosts();

  return (
    <>
      {allBlogs.map((post) => (
        <PeakBlog key={post.slug} data={post} />
      ))}
    </>
  );
}

export default function BlogPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Read my Blog
      </h1>
      <Suspense fallback={CircularLoading()}>
        <_Content />
      </Suspense>
    </section>
  );
}
