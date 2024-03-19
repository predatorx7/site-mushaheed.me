import fs from "fs/promises";
import path from "path";
import YAML from "yaml";

type Metadata = {
  title: string;
  publish_date: string;
  summary: string;
  tags: string[];
  image?: string;
};

export type BlogData = {
  metadata: Metadata;
  slug: string;
  tweetIds: string[];
  content: string;
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterContent = frontMatterBlock.trim();
  const metadata: Partial<Metadata> = YAML.parse(frontMatterContent) as any;

  return { metadata: metadata as Metadata, content };
}

async function getMarkdownFilesFrom(dir: string) {
  const data = await fs.readdir(dir);
  return data.filter((file) => {
    const fileExtName = path.extname(file);
    return fileExtName === ".mdx" || fileExtName === ".md";
  });
}

async function readBlogFile(filePath: string) {
  const rawContent = await fs.readFile(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function extractTweetIds(content: string) {
  const tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
  return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)![0]) || [];
}

async function getBlogData(dir: string): Promise<BlogData[]> {
  const mdxFiles = await getMarkdownFilesFrom(dir);
  const promises = mdxFiles.map(async (file) => {
    const { metadata, content } = await readBlogFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    const tweetIds = extractTweetIds(content);
    return {
      metadata,
      slug,
      tweetIds,
      content,
    };
  });
  return Promise.all(promises);
}

function getContentDirectoryPath() {
  return path.join(process.cwd(), "content");
}

export async function getBlogPosts() {
  const data = await getBlogData(getContentDirectoryPath());
  return data.sort((a, b) => {
    if (new Date(a.metadata.publish_date) > new Date(b.metadata.publish_date)) {
      return -1;
    }
    return 1;
  });
}
