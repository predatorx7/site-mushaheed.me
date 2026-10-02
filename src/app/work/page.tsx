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
        <WorkExperienceSection
          data={{
            organizationName: "CreatorOS / Reclaim Protocol",
            designationTitle: "Software Developer",
            years: {
              start: "Jul 2024",
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
              Build and maintain Reclaim&apos;s verification-client surface across
              the Flutter in-app SDK, native add-to-app modules, verifier app,
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
              traffic into reusable verification recipes through request
              discovery, constraint analysis, extraction validation, proof
              execution, and publishing.
            </li>
            <li>
              Worked on an autonomous browser-and-LLM workflow for discovering
              requests, validating proofs, isolating secrets, reporting
              progress, and publishing successful verification strategies.
            </li>
            <li>
              Conduct authorized black-box analysis of mobile and web
              applications to understand authenticated API flows and build CLI
              verification prototypes for complex consumer services.
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
              NestJS, PostgreSQL, and Docker Compose.
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
            organizationName: "Binary Numbers",
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
          <ul>
            <li>
              Led and mentored mobile engineers while owning architecture,
              technology choices, priorities, performance, and delivery for
              Flutter and Node.js products.
            </li>
            <li>
              Shipped more than nine applications, including four
              internationalized products, while collaborating with multiple
              product teams.
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
          <ul>
            <li>
              Built a Flutter and Firebase social-application prototype with
              state management, responsive interfaces, and retry behavior for
              failed requests.
            </li>
          </ul>
        </WorkExperienceSection>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Independent production work
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Product engineering and operations
        </p>
        <p>
          Alongside my primary role, I build and maintain production products
          for small businesses and specialist teams.
        </p>
        <ul>
          <li>
            <b>Paints operations platform:</b> a TypeScript and PostgreSQL
            system for inventory, purchasing, production runs, reconciliation,
            and operational reporting, with typed SQL and deployment tooling.
          </li>
          <li>
            <b>Thaathayya Illu:</b> a production hospitality booking system
            with payments, authentication, availability management, admin
            workflows, notifications, rate limiting, and cloud file storage.
          </li>
          <li>
            <b>Aline:</b> a production physiotherapy platform with a patient
            website, staff console, Go API, PostgreSQL, Firebase authentication,
            Google Cloud deployment, generated API clients, and care-management
            workflows.
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
      </div>
    </section>
  );
}
