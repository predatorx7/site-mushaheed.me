import AltBadge from "@/components/alt_badge";
import { WorkExperienceSection } from "@/components/work/work";
import Image from "next/image";
import hdfcbankPng from "public/images/hdfcbank.png";
import finouxSvg from "public/images/finoux.svg";
import creatorosSvg from "public/images/creatoros.svg";
import reclaimPng from "public/images/reclaim.png";
import bluecheckPng from "public/images/bluecheck.png";

export const metadata = {
  title: "Work",
  description: "A summary of my work and contributions.",
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">My Work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          On a mission to build products that makes everyone's life{" "}
          <b>easier</b>, and along the way, spread my knowledge which I
          collected from my journey. Here's a summary of my work so far.
        </p>
        <WorkExperienceSection
          data={{
            organizationName: "CreatorOS",
            designationTitle: "Software Developer",
            years: {
              start: "Jul 2024",
            },
          }}
        >
          <p>
            <span className="not-prose">
              <AltBadge href="https://creatoros.co/">
                <Image
                  src={creatorosSvg}
                  alt="CreatorOS"
                  width="20"
                  height="20"
                  role="img"
                  aria-label="CreatorOS"
                  className="inline-flex mr-1"
                />
              </AltBadge>
            </span>
            {" "}, a YC W21 company, develops products related to data verification using cryptography, and blockchain.
          </p>
          <ul>
            <li>
              {` I specialize in the creation of cross-platform mobile applications and SDKs to help build `}
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
              {` and `}
              <span className="not-prose">
                <AltBadge href="https://thebluecheck.com/">
                  <Image
                    src={bluecheckPng}
                    alt="The Blue Check"
                    width="100"
                    height="20"
                    role="img"
                    aria-label="The Blue Check"
                    className="inline-flex mr-1"
                  />
                </AltBadge>
              </span>
            </li>
          </ul>
        </WorkExperienceSection>
        <WorkExperienceSection
          data={{
            organizationName: "Finoux",
            designationTitle: "Senior Software Engineer",
            years: {
              start: "Nov 2022",
              end: "Aug 2024",
            },
          }}
        >
          <p>
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
            {" "}develops Enterprise Fintech solutions partnering with
            organizations in BSFI sector
          </p>
          <ul>
            <li>
              Led the software development of{" "}
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
              's Banking as a Service (BaaS) Enterprise & Public products. Owned the development lifecycle, including
              creating high-level design (HLD) documents, low-level design (LLD)
              documents, proof-of-concept (PoC) prototypes, and leading the team
              through task delegation.
            </li>
            <li>
              Built feature-rich mobile apps for Android and iOS using Flutter
              and Ionic-AngularJS, achieving rapid development and consistent
              cross-platform experiences.
            </li>
            <li>
              Mentored team members and Led the development of a well-documented
              full-stack enterprise web application using ReactJS, ExpressJS,
              Redux, NestJS, and Docker-Compose, prioritizing scalability and
              maintainability.
            </li>
            <li>
              Responsible for developing mobile, web, and backend of multiple
              enterprise, and public applications.
            </li>
            <li>
              Developed Flutter-Android, Ionic-Android plugins, and Typescript,
              Flutter, and Dart packages.
            </li>
            <li>
              Maintained the HDFC Bank Home Loans which uses Ionic Cordova.
            </li>
            <li>
              Created internal tools for standalone and CI/CD usage leveraging
              Bash, Python, Dart, and JavaScript, contributing to improved
              processes and team efficiency.
            </li>
            <li>
              Led the Flutter development team, effectively delegating tasks,
              fostering teamwork, and delivering projects on time.
            </li>
          </ul>
        </WorkExperienceSection>
        <WorkExperienceSection
          data={{
            organizationName: "Binary Numbers",
            designationTitle: "Senior Software Developer",
            years: {
              start: "Aug 2020",
              end: "Nov 2022",
            },
          }}
        >
          <p>
            Binary Numbers is a specialized product engineering, web and app
            development company
          </p>
          <ul>
            <li>
              Developed a scalable project template for NodeJS, and Flutter that
              reduced delivery time for apps that conforms to community best
              practices.
            </li>
            <li>
              Handled technical aspects of the product, including technology
              decisions and choices, architecture, priorities, and velocity.
            </li>
            <li>
              Led & mentored a team of mobile developers, where I was involved
              in building flutter, and NodeJs applications.
            </li>
            <li>
              Responsible for the development of private packages/plugins.
            </li>
            <li>
              Developed container configs, and tools to help maintain code, and
              automate various development-deployment tasks.
            </li>
            <li>
              Responsible for performance profiling and optimizations. Wrote
              unit & integration tests for critical components.
            </li>
            <li>
              Experience with MVCVM, MVVM pattern on apps and MVC, and the
              microservices pattern on servers.
            </li>
            <li>
              Used riverpod, streams, provider, and ephemeral for state
              management in flutter and Hive, and Drift for storage in dart.
            </li>
            <li>
              Integrated Razorpay, and Amazon IAP on backend and flutter apps.
              Built content delivery files builder for OTT apps.
            </li>
            <li>
              Deployed, and developed over 9 projects including 4
              internationalized apps in 2 years.
            </li>
            <li>
              Collaborated with 4+ teams to deliver projects on time retaining
              100% of clients in the 2-year period.
            </li>
          </ul>
        </WorkExperienceSection>
        <WorkExperienceSection
          data={{
            organizationName: "Kootumb",
            designationTitle: "Flutter Developer Intern",
            years: {
              start: "Aug 2019",
              end: "Mar 2020",
            },
          }}
        >
          <p>Kootumb is a web & app development consultancy firm.</p>
          <p>
            I joined <b>Kootumb</b> as an intern to grow as a Serverless Mobile
            application developmer. I built social media app like Instagram
            using <a href="https://flutter.dev">Flutter</a>, and{" "}
            <a href="https://firebase.google.com/">Firebase</a>.
          </p>
          <ul>
            <li>
              As an individual contributor, I developed a sample prototype
              social media serverless application using Flutter & Firebase
              Integrated the provider for state management in the app.
            </li>
            <li>
              Prepared retry logic in the app in the event of errors, broken
              connections, or server problems.
            </li>
            <li>
              Implemented the mobile application user interface according to
              design specifications.
            </li>
          </ul>
        </WorkExperienceSection>
      </div>
    </section>
  );
}
