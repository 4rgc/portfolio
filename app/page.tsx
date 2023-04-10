import Image from "next/image";
import Link from "next/link";
import Portrait from "./components/portrait";

export default function Home() {
  return (
    <div className="grow">
      <div className="flex items-center pb-3 space-x-6">
        <div className="space-y-3">
          <h1 className="font-mono text-4xl font-medium">
            Hi, I&apos;m Andrii.
          </h1>
          <p className="text-lg">
            I{"'"}m an experienced <b>Full&nbsp;Stack&nbsp;Developer</b>{" "}
            building scalable web applications for <b>50K+&nbsp;artists</b>{" "}
            @&nbsp;Autodesk.
          </p>
        </div>
        <Portrait className="shrink-0 grow"/>
      </div>
      <div className="flex pb-5 space-x-2 tablet:flex-col tablet:space-y-2 tablet:space-x-0">
        <div className="flex flex-col space-y-2 tablet:flex-row tablet:space-y-0 tablet:space-x-2">
          <div className="flex space-x-3 flex-1">
            <Image
              src="education-l.svg"
              alt="education"
              width="19"
              height="19"
              className="dark:hidden"
            />
            <Image
              src="education-d.svg"
              alt="education"
              width="19"
              height="19"
              className="hidden dark:block"
            />
            <span className="font-mono font-bold text-lightContrast font-sm dark:darkContrast">
            BSc, Computer Science<br/>@&nbsp;York University
            </span>
          </div>
          <div className="flex space-x-3 flex-1">
            <Image
              src="work-l.svg"
              alt="work"
              width="19"
              height="19"
              className="dark:hidden"
            />
            <Image
              src="work-d.svg"
              alt="work"
              width="19"
              height="19"
              className="hidden dark:block"
            />
            <span className="font-mono font-bold text-lightContrast font-sm dark:darkContrast">
            Software Developer<br/>@&nbsp;Autodesk
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between tablet:flex-row shrink-0">
          <div className="flex space-x-3">
            <Image
              src="linkedin-l.svg"
              alt="linkedin"
              width="19"
              height="19"
              className="dark:hidden"
            />
            <Image
              src="linkedin-d.svg"
              alt="linkedin"
              width="19"
              height="19"
              className="hidden dark:block"
            />
            <Link className="font-mono font-medium underline text-lightContrast font-sm dark:darkContrast" href="https://linkedin.com/in/andrii-bohdan" target="_blank">
              andrii-bohdan
            </Link>
          </div>
          <div className="flex space-x-3">
            <Image
              src="github-l.svg"
              alt="github"
              width="19"
              height="19"
              className="dark:hidden"
            />
            <Image
              src="github-d.svg"
              alt="github"
              width="19"
              height="19"
              className="hidden dark:block"
            />
            <Link className="font-mono font-medium underline text-lightContrast font-sm dark:darkContrast" href="https://github.com/4rgc" target="_blank">
              4rgc
            </Link>
          </div>
          <div className="flex space-x-3">
            <Image
              src="email-l.svg"
              alt="email"
              width="19"
              height="19"
              className="dark:hidden"
            />
            <Image
              src="email-d.svg"
              alt="email"
              width="19"
              height="19"
              className="hidden dark:block"
            />
            <Link className="font-mono font-medium underline text-lightContrast font-sm dark:darkContrast" href="mailto:bohdan.andrii@gmail.com" target="_blank">
              email
            </Link>
          </div>
        </div>
      </div>
      <article className="text-lg">
        I have <b>2 years</b> of full-stack industry experience in developing
        complex web-based SaaS products, and even more with my personal
        projects.
        <br />
        <br />
        My expertise includes developing complex web UIs using <b>
          React
        </b> and <b>Next.js</b>, building robust back-ends with{" "}
        <b>Express.js</b> or <b>Ruby on Rails</b>, implementing secure
        authentication and authorization systems, and optimizing the performance
        and stability of <b>Node.js</b> tooling.
        <br />
        <br />I also confidently navigate the integration and deployment realm
        including <b>Jenkins</b>, <b>GitHub Actions</b>, <b>Docker</b>,{" "}
        <b>Cypress</b> and <b>Cucumber</b>.
      </article>
    </div>
  );
}
