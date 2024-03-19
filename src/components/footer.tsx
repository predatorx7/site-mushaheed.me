import { RssFeedIcon } from "./icons";

export function Footer(props: { author?: string }) {
  return (
    <footer className="mt-20 pb-16 lt-sm:pb-8 lt-sm:mt-16">
      <p className="flex items-center gap-2.5 text-gray-400/800 dark:text-gray-500/800 text-sm">
        <span>
          © {new Date().getFullYear()} {props.author}. All rights reserved.
        </span>
        <a
          href="/feed"
          className="inline-flex items-center gap-1 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          title="Atom Feed"
        >
          <RssFeedIcon /> RSS
        </a>
      </p>
      <a
        className="me-2 text-xs decoration-solid dark:decoration-white"
        href="/privacy-policy"
      >
        Privacy Policy
      </a>
      <a
        className="me-2 text-xs decoration-solid dark:decoration-white"
        href="/terms-of-service"
      >
        Terms of Service
      </a>
    </footer>
  );
}
