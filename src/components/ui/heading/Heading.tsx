import classNames from "classnames";
import { FC } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

interface Props extends HTMLMotionProps<"h2"> {
  children: string | JSX.Element;
}

const Heading: FC<Props> = ({ children, className, ...props }) => {
  return (
    <motion.h2
      className={classNames(
        className,
        "font-heading text-2xl leading-normal tracking-wide",
        "md:text-4xl md:leading-normal"
      )}
      {...props}
    >
      {children}
    </motion.h2>
  );
};

export default Heading;
