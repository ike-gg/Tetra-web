import { FC } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

interface Props {
  children: string;
  className?: string;
  layoutId?: string;
}

const Label: FC<Props> = ({ children, className, layoutId }) => {
  return (
    <motion.span
      animate={{ opacity: 0.75 }}
      className={classNames(
        "uppercase text-sm tracking-widest font-normal",
        className
      )}
      layoutId={layoutId}
    >
      {children}
    </motion.span>
  );
};

export default Label;
