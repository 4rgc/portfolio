import Image from 'next/image';

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
          <div className="flex">
            <div className="mx-5 flex flex-col items-center">
              <div className="h-14" />
              <div className="w-[15px] h-[15px] bg-lightContrast dark:bg-darkContrast rounded-full shrink-0" />
              <div className="border-l-4 flex-1 border-dashed border-lightContrast dark:border-darkContrast" />
            </div>
            <div className="flex flex-col">
              <div className="text-lightContrast dark:text-darkContrast px-3 mb-2">
                Incoming Aug 2023
              </div>
              <div className="flex grow-1 px-3 gap-4 mb-4">
                <Image
                  src="adsk-d.svg"
                  width={35}
                  height={23.9}
                  alt="Autodesk Logo"
                  className="hidden dark:block"
                />
                <Image
                  src="adsk-l.svg"
                  width={35}
                  height={23.9}
                  alt="Autodesk Logo"
                  className="block dark:hidden"
                />
                <div className="flex flex-col gap-0.5">
                  <h2 className="text-xl">Autodesk ShotGrid</h2>
                  <h2 className="text-xl font-semibold">
                    Full Stack Developer (Intermediate)
                  </h2>
                </div>
              </div>
              <p>Incoming Full Stack Developer on the Flow team</p>
            </div>
          </div>
        </li>
        <li>
          <div className="flex">
            <div className="mx-5 flex flex-col items-center">
              <div className="h-20 border-l-4 border-dashed border-lightContrast dark:border-darkContrast" />
              <div className="w-[15px] h-[15px] bg-lightContrast dark:bg-darkContrast rounded-full shrink-0" />
              <div className="border-l-4 flex-1 border-dashed border-lightContrast dark:border-darkContrast" />
            </div>
            <div className="flex flex-col pt-8">
              <div className="text-lightContrast dark:text-darkContrast mb-2 px-3">
                May 2022 - Present
              </div>
              <div className="flex grow-1 px-3 gap-4 mb-4">
                <Image
                  src="adsk-d.svg"
                  width={35}
                  height={23.9}
                  alt="Autodesk Logo"
                  className="hidden dark:block"
                />
                <Image
                  src="adsk-l.svg"
                  width={35}
                  height={23.9}
                  alt="Autodesk Logo"
                  className="block dark:hidden"
                />
                <div className="flex flex-col gap-0.5">
                  <h2 className="text-xl">Autodesk ShotGrid</h2>
                  <h2 className="text-xl font-semibold">
                    Software Engineer (Part-time)
                  </h2>
                </div>
              </div>
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
            </div>
          </div>
        </li>
        <li>
          <div className="flex">
            <div className="mx-5 flex flex-col items-center">
              <div className="h-20 border-l-4 border-dashed border-lightContrast dark:border-darkContrast" />
              <div className="w-[15px] h-[15px] bg-lightContrast dark:bg-darkContrast rounded-full shrink-0" />
            </div>
            <div className="flex flex-col pt-8">
              <div className="text-lightContrast dark:text-darkContrast px-3 mb-2">
                Sep 2021 - May 2022
              </div>
              <div className="flex grow-1 px-3 gap-4 mb-4">
                <Image
                  src="adsk-d.svg"
                  width={35}
                  height={23.9}
                  alt="Autodesk Logo"
                  className="hidden dark:block"
                />
                <Image
                  src="adsk-l.svg"
                  width={35}
                  height={23.9}
                  alt="Autodesk Logo"
                  className="block dark:hidden"
                />
                <div className="flex flex-col gap-0.5">
                  <h2 className="text-xl">Autodesk ShotGrid</h2>
                  <h2 className="text-xl font-semibold">
                    Full Stack Developer Intern
                  </h2>
                </div>
              </div>
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
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ExperiencePage;
