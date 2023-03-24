import classNames from "classnames";
import { HTMLMotionProps, motion } from "framer-motion";
import { FC } from "react";

interface Props extends HTMLMotionProps<"p"> {
  children: JSX.Element | string;
}

const Paragraph: FC<Props> = ({ children, className, ...props }) => {
  return (
    <motion.p
      {...props}
      className={classNames(
        "text-base opacity-70 tracking-wide",
        "md:text-lg",
        className
      )}
    >
      {children}
    </motion.p>
  );
};

export default Paragraph;
