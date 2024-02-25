import AltBadge from "@/components/alt_badge";
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
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a software developer. I currently `}
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
        {`, where I work with my client `}
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
        {` to develop Banking as a service solutions, Full-stack apps for Enterprise apps, Enterprise & Public Mobile applications.`}
      </p>
    </section>
  );
}
