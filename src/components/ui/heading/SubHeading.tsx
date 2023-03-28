import classNames from "classnames";
import { FC } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

interface Props extends HTMLMotionProps<"h2"> {
  children: string | JSX.Element;
}

const SubHeading: FC<Props> = ({ children, className, ...props }) => {
  return (
    <motion.h3
      className={classNames(
        className,
        "font-heading text-lg leading-normal tracking-wide",
        "md:text-2xl md:leading-normal"
      )}
      {...props}
    >
      {children}
    </motion.h3>
  );
};

export default SubHeading;
