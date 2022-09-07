/** @jsx h */

import blog, { ga, redirects, h } from "blog";

blog({
  title: "Mushaheed Syed",
  description: "Welcome to my awesome blog",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "/assets/brownie.jpg",
  avatarClass: "rounded-full",
  author: "Mushaheed Syed",
  lang: "en",
  links: [
    { title: "Email", url: "mailto:hello@mushaheed.me" },
    { title: "GitHub", url: "https://github.com/predatorx7" },
    { title: "Twitter", url: "https://twitter.com/_predatorx7" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/syedmushaheed/" },
    { title: "Stack Overflow", url: "https://stackoverflow.com/users/10854681/syed-mushaheed" },
    { title: "Behance", url: "https://www.behance.net/mushaheed" },
  ],

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
