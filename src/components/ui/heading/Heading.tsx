import classNames from "classnames";
import { FC } from "react";

interface Props {
  children: string | JSX.Element;
  className?: string;
}

const Heading: FC<Props> = ({ children, className }) => {
  return (
    <h2
      className={classNames(
        "font-heading text-3xl leading-normal",
        "md:text-4xl md:leading-normal",
        className
      )}
    >
      {children}
    </h2>
  );
};

export default Heading;
