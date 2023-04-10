import Portrait from "./components/portrait";
import Headline from "./components/Headline";
import IconText from "./components/iconText";

export default function Home() {
  return (
    <div className="grow">
      <div className="flex items-center pb-3 space-x-6">
        <Headline />
        <Portrait className="shrink-0 grow" />
      </div>
      <div className="flex pb-5 space-x-2 tablet:flex-col tablet:space-y-2 tablet:space-x-0">
        <div className="flex flex-col space-y-2 tablet:flex-row tablet:space-y-0 tablet:space-x-2">
          <IconText
            className="flex-1"
            svgIconName="education"
            textStyle="font-mono font-bold text-lightContrast font-sm dark:darkContrast"
          >
            BSc, Computer Science
            <br />
            @&nbsp;York University
          </IconText>
          <IconText
            className="flex-1"
            svgIconName="work"
            textStyle="font-mono font-bold text-lightContrast font-sm dark:darkContrast"
          >
            Software Developer
            <br />
            @&nbsp;Autodesk
          </IconText>
        </div>
        <div className="flex flex-col justify-between tablet:justify-normal tablet:space-x-20 tablet:flex-row shrink-0">
          <IconText
            text="andrii-bohdan"
            textStyle="font-mono font-medium underline text-lightContrast font-sm dark:darkContrast"
            svgIconName="linkedin"
            linkUrl="https://linkedin.com/in/andrii-bohdan"
          />
          <IconText
            text="4rgc"
            textStyle="font-mono font-medium underline text-lightContrast font-sm dark:darkContrast"
            svgIconName="github"
            linkUrl="https://github.com/4rgc"
          />
          <IconText
            text="email"
            textStyle="font-mono font-medium underline text-lightContrast font-sm dark:darkContrast"
            svgIconName="email"
            linkUrl="mailto:bohdan.andrii@gmail.com"
          />
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
