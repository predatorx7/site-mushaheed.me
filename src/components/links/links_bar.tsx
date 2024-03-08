import { LinkData, links } from "./links";

const LinkIcon = ({ data }: { data: LinkData }) => {
  return (
    <a
      href={data.url}
      className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gray-600/10 dark:bg-gray-400/10 text-gray-700 dark:text-gray-400 hover:bg-gray-600/15 dark:hover:bg-gray-400/15 hover:text-black dark:hover:text-white transition-colors group"
    >
      <data.icon />
    </a>
  );
};

export const LinksNavBar = () => {
  return (
    <>
      <nav className="mb-3 flex gap-2">
        {links.map((data) => (
          <LinkIcon data={data} />
        ))}
      </nav>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
    </>
  );
};
