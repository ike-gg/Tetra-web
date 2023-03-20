import classNames from "classnames";
import { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  children: string | JSX.Element;
  className?: string;
  layoutId?: string;
}

const Heading: FC<Props> = ({ children, className, layoutId }) => {
  return (
    <motion.h2
      className={classNames(
        className,
        "font-heading text-3xl leading-normal tracking-wide",
        "md:text-4xl md:leading-normal"
      )}
      layoutId={layoutId}
    >
      {children}
    </motion.h2>
  );
};

export default Heading;
