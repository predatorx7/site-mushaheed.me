import AltBadge from "@/components/alt_badge";
import { LinksNavBar } from "@/components/links/links_bar";
import Image from "next/image";
import Link from "next/link";
import brownieJpg from "public/images/brownie.jpg";
import finouxSvg from "public/images/finoux.svg";
import hdfcbankPng from "public/images/hdfcbank.png";
import flutterConfJpg from "public/images/home/flutter_conf.jpg";
import ayushShekharJpg from "public/images/home/me_with_ayush_shekar.jpg";
import iitbAndroidJpg from "public/images/home/iitb_android.jpg";
import attendedFlutterConfInJpg from "public/images/home/attended_flutter_conf_in.jpg";
import tryingToWorkJpg from "public/images/home/trying_to_work.jpg";

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
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Learning Android at the Techfest event of IIT Bombay in 2018"
            src={iitbAndroidJpg}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me with Ayush Shekar at the Flutter Conf India"
            src={ayushShekharJpg}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Me attending my first in-person event, Flutter Conf India"
            src={flutterConfJpg}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Me, and my friend Sonal attended the Flutter Conf In event in Ahmedabad"
            src={attendedFlutterConfInJpg}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me working in a cafe with my favorite hot chocolate"
            src={tryingToWorkJpg}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
