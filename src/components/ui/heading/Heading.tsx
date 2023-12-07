import classNames from "classnames";
import { FC } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

interface Props extends HTMLMotionProps<"h2"> {
  children: string | JSX.Element;
  tooltip?: string;
}

const Heading: FC<Props> = ({ children, tooltip, className, ...props }) => {
  return (
    <>
      <motion.h2
        className={classNames(
          className,
          "font-heading text-2xl leading-normal tracking-wide",
          "md:text-4xl md:leading-normal"
        )}
        {...props}
      >
        {children}
        {tooltip && (
          <p className="text-sm font-sans text-neutral-500 -translate-y-1">
            {tooltip}
          </p>
        )}
      </motion.h2>
    </>
  );
};

export default Heading;
