import Heading from "@/components/ui/heading/Heading";
import SubHeading from "@/components/ui/heading/SubHeading";
import Label from "@/components/ui/label/Label";
import Paragraph from "@/components/ui/paragraph/Paragraph";
import useMouseGradient from "@/hooks/useMouseGradient";
import { motion } from "framer-motion";
import { FC } from "react";
import { RxArrowTopRight } from "react-icons/rx";
import { ProjectLink } from "./projectData";

interface Props {
  linkData: ProjectLink;
}

const ProjectLink: FC<Props> = ({ linkData }) => {
  const {
    bgColor,
    color,
    hover,
    desc,
    icon: Icon,
    name,
    href,
    label,
  } = linkData;

  const { gradientEffect, handleMouseLeave, handleMouseMove } =
    useMouseGradient(hover, bgColor);

  return (
    <motion.a
      href={href}
      target="_blank"
      animate={gradientEffect}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor: bgColor, color }}
      className="relative flex flex-col p-8 md:p-10 gap-4 w-full rounded-lg"
    >
      <span className="text-4xl">
        <Icon />
      </span>
      {label && <Label>{label}</Label>}
      <SubHeading>{name}</SubHeading>
      <Paragraph>{desc}</Paragraph>
      <div className="text-xl absolute bottom-4 right-4">
        <RxArrowTopRight />
      </div>
    </motion.a>
  );
};

export default ProjectLink;
