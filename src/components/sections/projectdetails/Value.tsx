import ItemHeading from "@/components/ui/heading/ItemHeading";
import Paragraph from "@/components/ui/paragraph/Paragraph";
import { FC } from "react";
import { Value } from "./projectData";
import { motion } from "framer-motion";
import SubHeading from "@/components/ui/heading/SubHeading";

interface Props {
  valueData: Value;
}

const Value: FC<Props> = ({ valueData }) => {
  const { description, icon: Icon, title } = valueData;

  return (
    <motion.article className="p-8 flex gap-6 border border-neutral-800 rounded-lg backdrop-blur-[1.5px] bg-black/20">
      <div className="text-5xl stroke-1 text-tetra-700/80 stroke-">
        <Icon />
      </div>
      <div className="flex flex-col gap-2">
        <ItemHeading>{title}</ItemHeading>
        <Paragraph>{description}</Paragraph>
      </div>
    </motion.article>
  );
};

export default Value;
