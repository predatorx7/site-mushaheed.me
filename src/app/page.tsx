import AltBadge from "@/components/alt_badge";
import { LinksNavBar } from "@/components/links/links_bar";
import Image from "next/image";
import Link from "next/link";
import brownieJpg from "public/images/brownie.jpg";
import reclaimPng from "public/images/reclaim.png";
import flutterConfJpg from "public/images/home/flutter_conf.jpg";
import dc7Sea from "public/images/home/me_in_dc7_sea.jpg";
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
        I&apos;m a <b>software engineer</b> who builds SDKs, developer tools,
        verification infrastructure, and production applications. I care about
        clear APIs, dependable systems, and making difficult technology easier
        for other developers to use.
      </p>
      <br />
      <p className="prose prose-neutral dark:prose-invert">
        {`I currently `}
        <Link href="/work">work</Link>
        {` on verification clients, native and cross-platform SDKs, developer tooling, and authenticated-data verification for `}
        <span className="not-prose">
          <AltBadge href="https://reclaimprotocol.org/">
            <Image
              src={reclaimPng}
              alt="Reclaim Protocol"
              width="80"
              height="20"
              role="img"
              aria-label="Reclaim Protocol"
              className="inline-flex mr-1"
            />
          </AltBadge>
        </span>
        {`. I also build and maintain independent products across operations, hospitality, and healthcare.`}
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
            alt="Me attending my first in-person event, Flutter Conf India"
            src={flutterConfJpg}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Me at DC7 SEA in Bangkok, Thailand"
            src={dc7Sea}
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
