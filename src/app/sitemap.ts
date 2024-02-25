export default async function sitemap() {
  let blogs = [
    // get post slugs from remote
  ].map((post: { slug: string; metadata: { publishedAt: string } }) => ({
    url: `https://magnificsoftware.com/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/blog", "/guestbook", "/uses", "/work"].map((route) => ({
    url: `https://magnificsoftware.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
