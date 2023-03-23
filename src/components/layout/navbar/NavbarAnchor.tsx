import { FC, useState } from "react";
import { motion, useScroll } from "framer-motion";
import classNames from "classnames";
import Label from "@/components/ui/label/Label";
import { RxArrowTopRight } from "react-icons/rx";

interface Props {
  href: string;
  name: string;
  label?: string;
}

const NavbarAnchor: FC<Props> = ({ href, name, label }) => {
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
          {name} {!label && <RxArrowTopRight />}
          {label && <Label>{label}</Label>}
        </p>
        <p className="flex items-center gap-3 text-tetra-600">
          {name} {!label && <RxArrowTopRight />}
          {label && <Label>{label}</Label>}
        </p>
      </motion.div>
    </motion.a>
  );
};

export default NavbarAnchor;
