/** @jsx h */

import { h } from "blog";
import { RssFeedIcon } from "./icons/icons.ts";

export function Footer(props: { author?: string }) {
  return (
    <footer class="mt-20 pb-16 lt-sm:pb-8 lt-sm:mt-16">
      <p class="flex items-center gap-2.5 text-gray-400/800 dark:text-gray-500/800 text-sm">
        <span>
            © {new Date().getFullYear()} {props.author}. All rights reserved.
        </span>
        <a
          href="/feed"
          class="inline-flex items-center gap-1 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
          title="Atom Feed"
        >
          <RssFeedIcon /> RSS
        </a>
      </p>
    </footer>
  );
}
