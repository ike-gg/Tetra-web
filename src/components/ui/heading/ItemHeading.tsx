import classNames from "classnames";
import { FC } from "react";
import { motion } from "framer-motion";

interface Props {
  children: string;
  className?: string;
  layoutId?: string;
}

const ItemHeading: FC<Props> = ({ children, className, layoutId }) => {
  return (
    <motion.h3
      layoutId={layoutId}
      className={classNames(
        "text-lg font-heading tracking-wide leading-snug z-50",
        "md:text-2xl",
        className
      )}
    >
      {children}
    </motion.h3>
  );
};

export default ItemHeading;
