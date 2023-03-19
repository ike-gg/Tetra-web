import classNames from "classnames";
import { FC } from "react";

interface Props {
  children: JSX.Element | string;
  className?: string;
}

const Paragraph: FC<Props> = ({ children, className }) => {
  return (
    <p
      className={classNames(
        "text-base text-white/80 tracking-wide",
        "md:text-lg",
        className
      )}
    >
      {children}
    </p>
  );
};

export default Paragraph;
