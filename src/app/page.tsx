import AltBadge from "@/components/alt_badge";
import { LinksNavBar } from "@/components/links/links_bar";
import Image from "next/image";
import Link from "next/link";
import brownieJpg from "public/images/brownie.jpg";
import finouxSvg from "public/images/finoux.svg";
import hdfcbankPng from "public/images/hdfcbank.png";

export default function Home() {
  return (
    <section>
      <Link href="/">
        <Image
          src={brownieJpg}
          alt="Brownie, my pet cat"
          width="100"
          height="100"
          role="img"
          aria-label="Brownie, my pet cat"
          className="not-prose bg-cover bg-center bg-no-repeat w-25 h-25 border-4 border-white rounded-full mb-4"
        />
      </Link>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Hi, I&apos;m Mushaheed Syed 👋
      </h1>
      <LinksNavBar />
      <p className="prose prose-neutral dark:prose-invert">
        I&apos;m a <b>software developer</b>, and an <b>open-source</b>{" "}
        enthusiast. I love to create beautiful, and easy-to-use applications for
        users and excellent tools for developers. Building a better experience
        for users and making softwares cheaper to maintain is my priority.
      </p>
      <br />
      <p className="prose prose-neutral dark:prose-invert">
        {`I currently `}
        <Link href="/work">work</Link>
        {` as the Senior Software Engineer at `}
        <span className="not-prose">
          <AltBadge href="https://www.finoux.com/">
            <Image
              src={finouxSvg}
              alt="Finoux"
              width="80"
              height="20"
              role="img"
              aria-label="Finoux"
              className="inline-flex mr-1"
            />
          </AltBadge>
        </span>
        {`, where I work with `}
        <span className="not-prose">
          <AltBadge href="https://www.finoux.com/">
            <Image
              src={hdfcbankPng}
              alt="HDFC Bank"
              width="116"
              height="20"
              role="img"
              aria-label="HDFC Bank"
              className="inline-flex mr-1"
            />
          </AltBadge>
        </span>
        {`'s Banking as a service team to craft softwares their Enterprise, and Public projects.`}
      </p>
    </section>
  );
}
