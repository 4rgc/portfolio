import ExperienceList from './ExperienceList';

const ExperiencePage = () => {
  return (
    <div className="grow">
      <div className="flex flex-col space-y-3 pr-12 mb-4">
        <h1 className="font-mono text-4xl font-medium">My experience</h1>
        <p className="text-lg">
          In my career I have worked in multiple <b>full-stack</b> teams,
          delivering on highly complex projects in fast-paced environments,
          development and testing infrastructure upgrades for{' '}
          <b>modern web applications</b> with <b>&gt;50K&nbsp;</b>
          active users.
        </p>
      </div>
      <ExperienceList
        experienceData={[
          {
            period: 'Jan 2024 - Present',
            iconName: 'adsk',
            companyName: 'Autodesk Flow',
            title: 'Full Stack Developer (Intermediate)',
            description: [
              'Spearheaded the design and development of the Permissions feature for Autodesk’s strategic innovation ' +
                'product in M&E, Flow Platform, working closely with a Principal SWE, Product Managers, QA, ' +
                'collaborating across 3 different teams while providing support to three teammates throughout its ' +
                'implementation',
              'Led the design and implementation of six GraphQL API endpoints, contributing to the design of six more',
              'Enhanced testability and reliability by designing an extensible interface for external GraphQL API ' +
                'integration, introducing mocking capabilities for application-level testing',
              'Eliminated release-blocking issues and improved system stability and performance by identifying and ' +
                'reporting three critical race conditions across eight services',
            ],
          },
          {
            period: 'Aug 2023 - Jan 2024',
            iconName: 'adsk',
            companyName: 'Autodesk ShotGrid',
            title: 'Full Stack Developer (Intermediate)',
            description: [
              'Developed a preview version of a highly flexible integration of Autodesk Flow and ShotGrid, allowing ' +
                'charter customers to seamlessly view and edit assets created in Maya, Moxion and Houdini',
              'Collaborated with the Data Model team to resolve release-blocking issues with OAuth authentication ' +
                'and add functionality to the GraphQL API',
              'Substantially optimized developer workflows by crafting custom scripts for HTTP interaction ' +
                'recordings regeneration and auth token retrieval, and presented refactor opportunities to the team ' +
                'using UML diagrams',
            ],
          },
          {
            period: 'May 2022 - Aug 2023',
            iconName: 'adsk',
            companyName: 'Autodesk ShotGrid',
            title: 'Software Engineer (Part-time)',
            description: [
              'Developed a highly customizable web-based project management app for >50K artists in the entertainment industries, specifically VFX, animation, and film production',
              'Improved the stability of the developer facing JS infrastructure, resulting in an 11x faster build script runtime by optimizing the usage of Webpack and ESLint/Prettier',
              'Upgraded to Node.js v16, resulting in a further ~200% improvement in the speed of build/test scripts and fixing 46% of vulnerabilities.',
            ],
          },
          {
            period: 'Sep 2021 - May 2022',
            iconName: 'adsk',
            companyName: 'Autodesk ShotGrid',
            title: 'Full Stack Developer Intern',
            description: [
              'Fixed complex UI bugs and extended the functionality of core UI components using Karma for unit/integration tests and Cypress for end-to-end testing',
              'Collaborated with a squad to deliver an Earliest Testable Product and an MVP of a strategic feature, allowing saving and restoring page settings using React/Storybook on the front-end and Ruby on Rails on the back-end',
            ],
          },
        ]}
      />
    </div>
  );
};

export default ExperiencePage;
