import { FC } from "react";
import { motion } from "framer-motion";
import { RiArrowRightUpLine } from "react-icons/ri";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  href?: string;
}

const Button: FC<Props> = ({ children, href }) => {
  if (href) {
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.04 }}
        className="bg-neutral-900 text-white tracking-wide p-2 px-5 rounded-md shadow-md border border-neutral-800 flex gap-2 items-center"
      >
        {children} {<RiArrowRightUpLine />}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      whileHover={{ scale: 1.04 }}
      className="bg-neutral-900 text-white tracking-wide p-2 px-5 rounded-md shadow-md border border-neutral-800"
    >
      {children}
    </motion.button>
  );
};

export default Button;
