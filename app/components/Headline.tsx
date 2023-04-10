import React from "react";

interface HeadlineProps extends React.ComponentPropsWithoutRef<"div"> {}

const Headline: React.FC<HeadlineProps> = (props) => {
  const {className, ...rest} = props;

  return (
    <div className={ `space-y-3 ${className}` } {...rest}>
      <h1 className="font-mono text-4xl font-medium">Hi, I&apos;m Andrii.</h1>
      <p className="text-lg">
        I{"'"}m an experienced <b>Full&nbsp;Stack&nbsp;Developer</b> building
        scalable web applications for <b>50K+&nbsp;artists</b> @&nbsp;Autodesk.
      </p>
    </div>
  );
};

export default Headline;
