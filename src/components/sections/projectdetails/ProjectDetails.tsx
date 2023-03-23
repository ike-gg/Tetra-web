import MasonryLayout from "@/components/layout/MasonryLayout";
import Heading from "@/components/ui/heading/Heading";
import useMouseGradient from "@/hooks/useMouseGradient";
import classNames from "classnames";
import Value from "./Value";
import { linksData, valuesData } from "./projectData";
import { motion } from "framer-motion";
import ProjectLink from "./ProjectLink";

const ProjectDetails = () => {
  const { gradientEffect, handleMouseLeave, handleMouseMove } =
    useMouseGradient("#F56B1A40");

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={gradientEffect}
      style={{
        boxShadow: "inset 0 0 50px 50px black",
      }}
      className={classNames(
        "shadow-inner bg-dotted-grid relative -top-16 flex flex-col gap-16 pt-16 pb-32"
      )}
    >
      <div
        style={{ backgroundSize: "32px 32px" }}
        className="absolute top-0 left-0 w-full h-full bg-dotted-grid -z-50"
      />
      <Heading>Project details</Heading>
      <MasonryLayout>
        {valuesData.map((value) => {
          return <Value key={value.title} valueData={value} />;
        })}
      </MasonryLayout>
      <Heading>If you&apos;re curious...</Heading>
      <div className="flex flex-col md:flex-row gap-6">
        {linksData.map((link) => {
          return <ProjectLink key={link.name} linkData={link} />;
        })}
      </div>
    </motion.section>
  );
};

export default ProjectDetails;
