/** @jsx h */

import blog, { ga, h, redirects } from "blog";
import { unocss_opts } from "./src/unocss.ts";
import { links } from "./src/links.ts";
import { Footer } from "./src/components/footer.tsx";
import { commons } from "./src/commons.ts";

blog({
  title: commons.name,
  description: "Welcome to my awesome website",
  avatar: "/assets/brownie.jpg",
  // cover: "/assets/background.png",
  avatarClass: "rounded-full",
  author: commons.name,
  favicon: "/assets/favicon.png",
  lang: "en",
  dateFormat: function(date: Date) {
    return date.toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  },
  links: links,
  unocss: unocss_opts,
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  footer: <Footer author={commons.name} />,
  // middlewares: [

  // If you want to set up Google Analytics, paste your GA key here.
  // ga("UA-XXXXXXXX-X"),

  // If you want to provide some redirections, you can specify them here,
  // pathname specified in a key will redirect to pathname in the value.
  // redirects({
  //  "/hello_world.html": "/hello_world",
  // }),

  // ]
});
