import Image from "next/image";

interface PortraitProps extends React.ComponentPropsWithoutRef<"div"> {}

const Portrait: React.FC<PortraitProps> = (props) => {
  const {className, ...rest} = props;

  return (
    <div className={ `relative pr-3 pb-3 ${className}` } {...rest}>
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
  );
};

export default Portrait;
