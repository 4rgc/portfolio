import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex items-center pb-3 space-x-6">
        <div className="space-y-3">
          <h1 className="font-mono text-4xl font-medium">
            Hi, I&apos;m Andrii.
          </h1>
          <p className="text-lg">
            I{"'"}m an experienced <b>Full&nbsp;Stack&nbsp;Developer</b>{" "}
            building scalable web applications for{" "}
            <b>50K+&nbsp;artists</b> @&nbsp;Autodesk.
          </p>
        </div>
        <div className="relative pr-3 pb-3 shrink-0 grow">
          <Image
            src="/portrait.jpg"
            alt="portrait"
            width="93"
            height="116"
            className="relative z-10 shadow-lg"
          />
          <Image
            src="portrait-border-l.svg"
            alt="portrait-frame"
            width="93"
            height="116"
            className="absolute top-2 left-2 z-0 dark:hidden"
          />
          <Image
            src="portrait-border-d.svg"
            alt="portrait-frame"
            width="93"
            height="116"
            className="hidden absolute top-2 left-2 z-0 dark:block"
          />
        </div>
      </div>
      <div className="flex pb-5 tablet:flex-col">
        <div className="flex flex-col space-y-2 tablet:flex-row">
          <div className="flex space-x-3">
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
              BSc, Computer Science @&nbsp;York University
            </span>
          </div>
          <div className="flex space-x-3">
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
              Software Developer @&nbsp;Autodesk
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
            <span className="font-mono font-medium underline text-lightContrast font-sm dark:darkContrast">
              andrii-bohdan
            </span>
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
            <span className="font-mono font-medium underline text-lightContrast font-sm dark:darkContrast">
              4rgc
            </span>
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
            <span className="font-mono font-medium underline text-lightContrast font-sm dark:darkContrast">
              email
            </span>
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
