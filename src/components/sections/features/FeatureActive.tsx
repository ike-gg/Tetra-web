import ItemHeading from "@/components/ui/heading/ItemHeading";
import Label from "@/components/ui/label/Label";
import Paragraph from "@/components/ui/paragraph/Paragraph";
import classNames from "classnames";
import { motion } from "framer-motion";
import { FC, MouseEvent } from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import featuresData from "./featuresData";

interface Props {
  activeId: string;
  discardHandler: () => void;
}

const FeatureActive: FC<Props> = ({ activeId, discardHandler }) => {
  const feature = featuresData.find((feature) => feature.id === activeId);

  if (!feature) return <p>not found feature id</p>;

  const { longDesc, name, videoUrl, label } = feature;

  const handlePropagation = (e: MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      onClick={discardHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classNames(
        "z-40 fixed w-full h-full top-0 left-0 flex justify-center items-center bg-black/70 pt-36",
        "md:p-12"
      )}
    >
      <motion.div
        layoutId={activeId}
        onClick={handlePropagation}
        className={classNames(
          "max-h-full bg-blackplus-900 border border-neutral-700 rounded-lg overflow-y-auto max-w-screen-md w-full p-6 pb-16 flex flex-col mt-auto gap-6 shadow-lg",
          "md:my-auto md:p-8"
        )}
      >
        <div className="flex items-center gap-6">
          <motion.div
            className="text-3xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
            onClick={discardHandler}
          >
            {<RiArrowLeftLine />}
          </motion.div>
          <div>
            <Label layoutId={activeId + "label"}>{label}</Label>
            <ItemHeading layoutId={activeId + "name"}>{name}</ItemHeading>
          </div>
        </div>
        {videoUrl && (
          <motion.video
            playsInline
            autoPlay
            loop
            muted
            src={videoUrl}
            className="rounded-md"
            layoutId={activeId + "video"}
          />
        )}
        {longDesc.map((text) => (
          <Paragraph key={text}>{text}</Paragraph>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default FeatureActive;
