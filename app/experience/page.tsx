import ExperienceItem from './ExperienceItem';

const ExperiencePage = () => {
  return (
    <div className="grow">
      <div className="flex flex-col space-y-3 pr-12 mb-4">
        <h1 className="font-mono text-4xl font-medium">My experience</h1>
        <p className="text-lg">
          In my fresh career I have worked in multiple <b>full-stack</b> teams,
          delivering on complex projects, development and testing infrastructure
          upgrades for <b>modern web applications</b> with <b>&gt;50K&nbsp;</b>
          active users.
        </p>
      </div>
      <ul className="mb-8">
        <li>
          <ExperienceItem
            period="Aug 2023 - Present"
            iconName="adsk"
            companyName="Autodesk ShotGrid"
            title="Full Stack Developer (Intermediate)"
            description={
              <p>
                Working on the Flow team bringing artists from different
                software isles closer together
              </p>
            }
            position="first"
          />
        </li>
        <li>
          <ExperienceItem
            period="May 2022 - Aug 2023"
            iconName="adsk"
            companyName="Autodesk ShotGrid"
            title="Software Engineer (Part-time)"
            description={
              <ul className="list-disc list-inside grid gap-4">
                <li>
                  Developed a highly customizable web-based project management
                  app for &gt;50K artists in the entertainment industries,
                  specifically VFX, animation, and film production
                </li>
                <li>
                  Improved the stability of the developer facing JS
                  infrastructure, resulting in an 11x faster build script
                  runtime by optimizing the usage of Webpack and ESLint/Prettier
                </li>
                <li>
                  Upgraded to Node.js v16, resulting in a further ~200%
                  improvement in the speed of build/test scripts and fixing 46%
                  of vulnerabilities.
                </li>
              </ul>
            }
            position="middle"
          />
        </li>
        <li>
          <ExperienceItem
            period="Sep 2021 - May 2022"
            iconName="adsk"
            companyName="Autodesk ShotGrid"
            title="Full Stack Developer Intern"
            description={
              <ul className="list-disc list-inside grid gap-4">
                <li>
                  Fixed complex UI bugs and extended the functionality of core
                  UI components using Karma for unit/integration tests and
                  Cypress for end-to-end testing
                </li>
                <li>
                  Collaborated with a squad to deliver an Earliest Testable
                  Product and an MVP of a strategic feature, allowing saving and
                  restoring page settings using React/Storybook on the front-end
                  and Ruby on Rails on the back-end
                </li>
              </ul>
            }
            position="last"
          />
        </li>
      </ul>
    </div>
  );
};

export default ExperiencePage;
