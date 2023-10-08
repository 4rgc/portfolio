import Image from 'next/image';
type ExperienceItemProps = {
  period: string;
  iconName: string;
  companyName: string;
  title: string;
  description: React.ReactNode;
  position: 'first' | 'middle' | 'last';
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  period,
  iconName,
  companyName,
  title,
  description,
  position,
}) => (
  <div className="flex">
    <div className="mx-3 laptop:mx-5 flex flex-col items-center">
      {position === 'first' ? (
        <div className="h-14" />
      ) : (
        <div
          className={`h-20 border-l-4 border-dashed border-lightContrast dark:border-darkContrast mr-[0.05px]`}
        />
      )}
      <div className="w-[15px] h-[15px] bg-lightContrast dark:bg-darkContrast rounded-full shrink-0" />
      <div
        className={`${
          position === 'last' ? 'hidden' : ''
        } border-l-4 flex-1 border-dashed border-lightContrast dark:border-darkContrast mr-[0.05px]`}
      />
    </div>
    <div
      className={`flex flex-col ${
        ['middle', 'last'].includes(position) ? 'pt-8' : ''
      }`}
    >
      <div className="text-lightContrast dark:text-darkContrast px-3 mb-2">
        {period}
      </div>
      <div className="flex grow-1 pl-2 gap-4 mb-4">
        <Image
          src={`${iconName}-d.svg`}
          width={35}
          height={23.9}
          alt={`${companyName} Logo`}
          className="hidden dark:block"
        />
        <Image
          src={`${iconName}-l.svg`}
          width={35}
          height={23.9}
          alt={`${companyName} Logo`}
          className="block dark:hidden"
        />
        <div className="flex flex-col gap-0.5">
          <h2 className="text-l">{companyName}</h2>
          <h2 className="text-l font-semibold">{title}</h2>
        </div>
      </div>
      {description}
    </div>
  </div>
);

export default ExperienceItem;
