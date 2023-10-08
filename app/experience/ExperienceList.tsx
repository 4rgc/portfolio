import ExperienceItem from './ExperienceItem';
import { ExperienceData } from './experienceData';

type ExperienceListProps = {
  experienceData?: ExperienceData;
};

const ExperienceList: React.FC<ExperienceListProps> = ({ experienceData }) => {
  return (
    <ul className="mb-8">
      {experienceData &&
        experienceData.map((item, idx) => (
          <li key={item.period}>
            <ExperienceItem
              period={item.period}
              iconName={item.iconName}
              companyName={item.companyName}
              title={item.title}
              description={item.description}
              position={
                idx === 0
                  ? 'first'
                  : idx === experienceData.length - 1
                  ? 'last'
                  : 'middle'
              }
            />
          </li>
        ))}
    </ul>
  );
};

export default ExperienceList;
