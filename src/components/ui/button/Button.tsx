import { FC } from "react";
import { motion } from "framer-motion";
import Label from "../label/Label";
import classNames from "classnames";
import { RxArrowTopRight } from "react-icons/rx";

interface Props {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  href?: string;
  disabled?: boolean;
  label?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<Props> = ({
  children,
  href,
  disabled = false,
  label,
  className,
  onClick,
}) => {
  if (href) {
    return (
      <motion.a
        href={href}
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.04 }}
        className={classNames(
          "bg-neutral-900 text-white tracking-wide p-2 px-5 rounded-md shadow-md border border-neutral-800 flex gap-2 items-center justify-center",
          className
        )}
      >
        {children}
        {label && <Label>{label}</Label>}
        {<RxArrowTopRight />}
      </motion.a>
    );
  }

  return (
    <motion.button
      disabled={disabled}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      whileHover={{ scale: disabled ? 1 : 1.04 }}
      className={classNames(
        "flex items-center gap-2 bg-neutral-900 text-white tracking-wide p-2 px-5 rounded-md shadow-md border border-neutral-800 disabled:opacity-90 disabled:text-neutral-400 justify-center",
        className
      )}
      onClick={onClick}
    >
      {children}
      {label && <Label>{label}</Label>}
    </motion.button>
  );
};

export default Button;
