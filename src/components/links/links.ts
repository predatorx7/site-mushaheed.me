import {
  BehanceIcon,
  EmailIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  StackoverflowIcon,
  TwitterIcon,
} from "../icons";

export type LinkData = {
  title: string;
  url: string;
  icon: () => JSX.Element;
};

export const links: LinkData[] = [
  {
    title: "Email",
    url: "mailto:hello@mushaheed.me",
    icon: EmailIcon,
  },
  {
    title: "GitHub",
    url: "https://github.com/predatorx7",
    icon: GithubIcon,
  },
  {
    title: "Twitter",
    url: "https://twitter.com/_predatorx7",
    icon: TwitterIcon,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/syedmushaheed/",
    icon: LinkedinIcon,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/mushaheedx/",
    icon: InstagramIcon,
  },
  {
    title: "Stack Overflow",
    url: "https://stackoverflow.com/users/10854681/syed-mushaheed",
    icon: StackoverflowIcon,
  },
  {
    title: "Behance",
    url: "https://www.behance.net/mushaheed",
    icon: BehanceIcon,
  },
];
