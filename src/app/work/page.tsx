import AltBadge from "@/components/alt_badge";
import { WorkExperienceSection } from "@/components/work/work";
import Image from "next/image";
import hdfcbankPng from "public/images/hdfcbank.png";
import finouxSvg from "public/images/finoux.svg";
import reclaimPng from "public/images/reclaim.png";

export const metadata = {
  title: "Work",
  description:
    "My work across verification infrastructure, SDKs, developer tooling, mobile applications, and production systems.",
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">My Work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I build developer-facing products and production systems across SDKs,
          mobile platforms, APIs, infrastructure, and the web. My recent work
          focuses on authenticated-data verification: making complex protocol
          and cryptographic systems reliable and approachable for developers.
        </p>

        <h2 className="font-medium text-xl mt-8 mb-1 tracking-tighter">
          Impact
        </h2>
        <ul>
          <li>
            Supported <b>more than five million verifications</b> across a wide
            range of Reclaim Protocol customer use cases.
          </li>
          <li>
            Shipped OTT applications with <b>850,000+ combined downloads</b>,
            more than 126,000 combined monthly active users, and up to 99.85%
            crash-free users.
          </li>
          <li>
            Built a hospitality booking system that surpassed{" "}
            <b>₹753,000 in net revenue within two months</b> of launching for a
            single property.
          </li>
          <li>
            Contributed to Google&apos;s Flutter and Dart repositories, with work
            featured in Flutter&apos;s notable commits.
          </li>
        </ul>
        <WorkExperienceSection
          data={{
            organizationName: "Reclaim Protocol by CreatorOS (YC W21)",
            designationTitle: "Software Developer",
            years: {
              start: "Jun 2024",
            },
          }}
        >
          <p>
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
            {" "}
            lets people prove facts about their authenticated data without
            handing over an entire account or document.
          </p>
          <ul>
            <li>
              Lead native and cross-platform SDK development across the Flutter
              in-app SDK, Android/iOS add-to-app modules, verifier app,
              browser-extension SDK, JavaScript SDK, portal, backend services,
              and TEE integrations.
            </li>
            <li>
              Designed and shipped versioned verification sessions spanning
              OpenAPI contracts, claimant links, client capabilities,
              callbacks, analytics events, proof delivery, feature flags, and
              compatibility across multiple verification clients.
            </li>
            <li>
              Built developer tooling that turns captured authenticated HTTP
              traffic into reusable verification strategies through request
              discovery, constraint analysis, extraction validation, proof
              execution, publishing, and agent-facing documentation.
            </li>
            <li>
              Implemented AI-assisted verification infrastructure with
              autonomous browser workflows, isolated secret handling,
              interchangeable model adapters, progress reporting, proof
              validation, and publish-on-success behavior.
            </li>
            <li>
              Conduct authorized black-box protocol research on mobile and web
              applications, identifying authenticated API flows and building
              CLI prototypes that produce zkTLS-backed verification proofs.
            </li>
            <li>
              Helped build Reclaim Builder across discovery and verification
              UX, APIs, PostgreSQL data models, authentication, billing and
              usage metering, generated SDK contracts, deployment, automated
              tests, and operational documentation.
            </li>
            <li>
              Hardened verification behavior with typed feature configuration,
              client capability reporting, deep links and deferred installs,
              diagnostics redaction, and integration and end-to-end tests.
            </li>
          </ul>
        </WorkExperienceSection>
        <WorkExperienceSection
          data={{
            organizationName: "Finoux Solutions Pvt Ltd / HDFC Bank",
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
            {" "}
            develops enterprise fintech products for organizations in the BFSI
            sector.
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
              &apos;s Banking-as-a-Service products. Owned delivery from proofs of
              concept and high- and low-level design through implementation and
              team coordination.
            </li>
            <li>
              Built and maintained enterprise mobile, web, and backend systems
              using Flutter, Ionic/Cordova, React, Redux Toolkit, Node.js,
              NestJS, PostgreSQL, and Docker Compose, including the HDFC Bank
              Home Loans application.
            </li>
            <li>
              Led development of a documented, maintainable full-stack
              enterprise platform and mentored engineers across mobile and web
              delivery.
            </li>
            <li>
              Developed Flutter/Android and Ionic/Android plugins alongside
              reusable TypeScript, Dart, and Flutter packages.
            </li>
            <li>
              Created Bash, Python, Dart, and JavaScript tooling for local
              development and CI/CD, improving repeatability across development
              and release workflows.
            </li>
            <li>
              Led and mentored the Flutter team, reviewed implementations, and
              coordinated delivery across product surfaces.
            </li>
          </ul>
        </WorkExperienceSection>
        <WorkExperienceSection
          data={{
            organizationName: "Binary Numbers Itzone LLP",
            designationTitle: "Senior Software Developer",
            years: {
              start: "Aug 2020",
              end: "Nov 2022",
            },
          }}
        >
          <p>
            Binary Numbers is a product engineering and application development
            company.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Senior Software Developer, Apr 2022 - Nov 2022 · Junior Software
            Developer, Jun 2021 - Mar 2022 · Software Developer Intern, Aug 2020
            - May 2021
          </p>
          <ul>
            <li>
              Earned two promotions in under two years, progressing from intern
              to senior developer while taking ownership of architecture,
              delivery planning, mentoring, and project velocity.
            </li>
            <li>
              Shipped more than nine applications, including four
              internationalized products, while collaborating across four or
              more teams and retaining every client during the two-year period.
            </li>
            <li>
              Built reusable Flutter and Node.js foundations, private packages,
              native plugins, container configurations, deployment automation,
              and test infrastructure.
            </li>
            <li>
              Integrated Razorpay, Amazon in-app purchases, and other payment
              gateways across Kotlin, Flutter, and Express.js systems, and
              built content-delivery tooling for OTT applications.
            </li>
            <li>
              Diagnosed memory leaks, unreachable code, and state-management
              failures, and shipped applications across Android, iOS, Android
              TV, and Fire TV.
            </li>
          </ul>
        </WorkExperienceSection>
        <WorkExperienceSection
          data={{
            organizationName: "Kootumb Multimedia Pvt Ltd",
            designationTitle: "Flutter Developer Intern",
            years: {
              start: "Aug 2019",
              end: "Feb 2020",
            },
          }}
        >
          <p>Kootumb is a web and application development consultancy.</p>
          <ul>
            <li>
              Built a serverless Flutter and Firebase social-application
              prototype with authentication, cloud storage, crash analytics,
              state management, privacy controls, and retry behavior.
            </li>
            <li>
              Translated wireframes and UI prototypes into responsive
              interfaces and tested public and private user flows across
              multiple accounts.
            </li>
          </ul>
        </WorkExperienceSection>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Side projects
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Product engineering and operations
        </p>
        <p>
          Alongside my primary role, I build and operate production products
          for small businesses and specialist teams.
        </p>
        <ul>
          <li>
            <b>Ink manufacturing and resource-planning platform:</b> a
            production TypeScript and PostgreSQL monorepo for inventory,
            purchasing, production runs, reconciliation, precision-safe stock
            accounting, analytics, typed SQL, and operational tooling.
          </li>
          <li>
            <a href="https://thaathayyaillu.com/"><b>Thaathayya Illu:</b></a>{" "}
            a production hospitality booking system with React, Node.js,
            PostgreSQL, Razorpay payments, authentication, availability
            management, admin workflows, notifications, rate limiting, and
            cloud file storage.
          </li>
          <li>
            <a href="https://alinelife.com/"><b>Aline:</b></a> a production
            physiotherapy platform with a patient website, staff console, Go
            API, PostgreSQL, Firebase authentication and hosting, Google Cloud
            deployment, generated API clients, and care-management workflows.
          </li>
        </ul>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Open source
        </h2>
        <p>
          I contribute to developer libraries and tools across Dart, Flutter,
          TypeScript, Go, Kotlin, C/C++, and Python. My contributions to
          Google&apos;s Flutter and Dart repositories have also appeared in
          Flutter&apos;s notable commits.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Education</h2>
        <ul>
          <li>
            <b>Master of Computer Applications, Computer Science</b> — Manipal
            Institute of Technology, Mar 2023 - Jun 2025.
          </li>
          <li>
            <b>Bachelor of Science, Information Technology</b> — Nagindas
            Khandwala College, Jun 2018 - May 2021; CGPA 8.49/10, Grade A.
          </li>
        </ul>
      </div>
    </section>
  );
}
