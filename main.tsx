/** @jsx h */

import blog, { ga, h, redirects } from "blog";
import { unocss_opts } from "./unocss.ts";
import { links } from "./links.ts";
import { Footer } from "./footer.tsx";
import { commons } from "./commons.ts";

blog({
  title: commons.name,
  description: "Welcome to my awesome website",
  avatar: "/assets/brownie.jpg",
  // cover: "/assets/background.png",
  avatarClass: "rounded-full",
  author: commons.name,
  favicon: "/assets/favicon.png",
  lang: "en",
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
