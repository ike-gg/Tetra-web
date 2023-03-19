import { FC, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { RiArrowRightUpLine } from "react-icons/ri";
import classNames from "classnames";

interface Props {
  href: string;
  name: string;
}

const NavbarAnchor: FC<Props> = ({ href, name }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <motion.a
      href={href}
      className="overflow-hidden h-8"
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      <motion.div animate={{ translateY: isHover ? "-50%" : "0%" }}>
        <p className="flex items-center gap-3">
          {name} {<RiArrowRightUpLine />}
        </p>
        <p
          className={classNames("flex items-center gap-3", {
            "text-tetra-600": isHover,
          })}
        >
          {name} {<RiArrowRightUpLine />}
        </p>
      </motion.div>
    </motion.a>
  );
};

export default NavbarAnchor;
