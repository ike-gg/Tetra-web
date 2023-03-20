import { motion } from "framer-motion";
import { FC } from "react";
import { RiArrowLeftLine } from "react-icons/ri";
import featuresData from "./featuresData";

interface Props {
  activeId: string;
  discardHandler: () => void;
}

const FeatureActive: FC<Props> = ({ activeId, discardHandler }) => {
  const feature = featuresData.find((feature) => feature.id === activeId);

  if (!feature) return <p>not found feature id</p>;

  const { id, longDesc, name, videoUrl, label } = feature;

  return (
    <motion.div
      onClick={discardHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="z-40 fixed w-full h-full top-0 left-0 flex justify-center items-center bg-black/70 pt-20 md:p-20"
    >
      <motion.div
        layoutId={activeId}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="max-h-full bg-blackplus-900 border border-neutral-700 rounded-lg overflow-y-auto max-w-screen-md w-full p-6 md:p-8 flex flex-col mt-auto gap-6 shadow-lg"
      >
        <div className="flex items-center gap-6">
          <motion.div
            className="text-3xl opacity-50 hover:opacity-100 transition-opacity cursor-pointer"
            onClick={() => {
              discardHandler();
            }}
          >
            {" "}
            {<RiArrowLeftLine />}
          </motion.div>
          <div>
            <motion.span
              layoutId={activeId + "label"}
              className="uppercase text-sm tracking-widest font-normal opacity-60"
            >
              {label || "command"}
            </motion.span>
            <motion.h3
              layoutId={activeId + "name"}
              className="text-2xl font-heading tracking-wide z-50"
            >
              {name}
            </motion.h3>
          </div>
        </div>

        {videoUrl && (
          <motion.video
            playsInline
            controls
            src={videoUrl}
            className="rounded-md"
            layoutId={activeId + "video"}
          />
        )}
        <motion.p className="text-lg opacity-60 tracking-wide leading-loose">
          {longDesc}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default FeatureActive;
