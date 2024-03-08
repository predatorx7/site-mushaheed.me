import fs from "fs";
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
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  let match = frontmatterRegex.exec(fileContent);
  let frontMatterBlock = match![1];
  let content = fileContent.replace(frontmatterRegex, "").trim();
  let frontMatterContent = frontMatterBlock.trim();
  let metadata: Partial<Metadata> = YAML.parse(frontMatterContent);

  return { metadata: metadata as Metadata, content };
}

function getMarkdownFilesFrom(dir: string) {
  return fs.readdirSync(dir).filter((file) => {
    const fileExtName = path.extname(file);
    return fileExtName === ".mdx" || fileExtName === ".md";
  });
}

function readBlogFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function extractTweetIds(content: string) {
  let tweetMatches = content.match(/<StaticTweet\sid="[0-9]+"\s\/>/g);
  return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)![0]) || [];
}

function getBlogData(dir: string): BlogData[] {
  let mdxFiles = getMarkdownFilesFrom(dir);
  return mdxFiles.map((file) => {
    let { metadata, content } = readBlogFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    let tweetIds = extractTweetIds(content);
    return {
      metadata,
      slug,
      tweetIds,
      content,
    };
  });
}

function getContentDirectoryPath() {
  return path.join(process.cwd(), "content");
}

export function getBlogPosts() {
  return getBlogData(getContentDirectoryPath()).sort((a, b) => {
    if (new Date(a.metadata.publish_date) > new Date(b.metadata.publish_date)) {
      return -1;
    }
    return 1;
  });
}
