import Image from 'next/image';
import Link from 'next/link';

interface IconTextProps extends React.ComponentPropsWithoutRef<'div'> {
  svgIconName: string;
  linkUrl?: string;
  text?: string;
  textStyle?: string;
}

const IconText: React.FC<IconTextProps> = (props) => {
  const {
    svgIconName,
    linkUrl = '',
    textStyle = '',
    text,
    children,
    className,
    ...rest
  } = props;

  return (
    <div className={`flex space-x-3 ${className}`} {...rest}>
      <div className="my-auto">
        <Image
          src={`${svgIconName}-l.svg`}
          alt="education"
          width="19"
          height="19"
          className="dark:hidden"
        />
        <Image
          src={`${svgIconName}-d.svg`}
          alt="education"
          width="19"
          height="19"
          className="hidden ml-0 dark:block"
        />
      </div>
      {linkUrl ? (
        <Link className={textStyle} href={linkUrl} target="_blank">
          {text || children}
        </Link>
      ) : (
        <span className={textStyle}>{text || children}</span>
      )}
    </div>
  );
};

export default IconText;
