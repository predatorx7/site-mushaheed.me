import { BlogData } from "@/db/blog";
import { DateTime } from "luxon";
import Link from "next/link";

export const PeakBlog = ({ data }: { data: BlogData }) => {
  const publishedDateTime = DateTime.fromISO(data.metadata.publish_date);
  const publishedDateTimeString = publishedDateTime.toFormat("DDDD");

  const path = `/blog/${data.slug}`;

  return (
    <div className="pt-12 first:pt-0">
      <h3 className="text-2xl font-bold">
        <Link href={path}>{data.metadata.title}</Link>
      </h3>
      <section className="flex gap-x-2 flex-wrap">
        {data.metadata.tags.map((tag) => (
          <Link
            className="text-bluegray-500 font-bold"
            href={`/blob/?tag=${tag}`}
          >
            {`#${tag}`}
          </Link>
        ))}
      </section>
      <p className="text-gray-500/80">
        <time dateTime={publishedDateTime.toISO()!}>
          {publishedDateTimeString}
        </time>
      </p>
      <p className="mt-3 text-gray-600 dark:text-gray-400">
        {data.metadata.summary}
      </p>
      <p className="mt-3">
        <Link
          className="leading-tight text-gray-900 dark:text-gray-100 inline-block border-b-1 border-gray-600 hover:text-gray-500 hover:border-gray-500 transition-colors"
          href={path}
          title={`Read "${data.metadata.title}"`}
        >
          Read More
        </Link>
      </p>
    </div>
  );
};
