import Paragraph from "@/components/ui/paragraph/Paragraph";
import { FC, useRef } from "react";
import { Feature } from "./featuresData";
import { motion } from "framer-motion";
import { RiArrowRightUpLine } from "react-icons/ri";
import ItemHeading from "@/components/ui/heading/ItemHeading";
import Label from "@/components/ui/label/Label";

interface Props {
  featureData: Feature;
  setActive: (id: string) => void;
}

const FeatureItem: FC<Props> = ({ featureData, setActive }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const { name, shortDesc, label, videoUrl, height, id } = featureData;

  const handleSetActive = () => {
    setActive(id);
  };

  const playOnHover = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
  };

  const pauseOnLeave = () => {
    if (!videoRef.current) return;
    videoRef.current.pause();
  };

  return (
    <motion.div
      onMouseEnter={playOnHover}
      onMouseLeave={pauseOnLeave}
      onClick={handleSetActive}
      className="relative bg-blackplus-900 flex flex-col border-2 border-tetra-700/40 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-filter duration-300 cursor-pointer"
      style={{ height: `${height}rem` }}
      layoutId={id}
      key={id}
    >
      {videoUrl && (
        <motion.video
          playsInline
          muted
          preload="metadata"
          layoutId={id + "video"}
          ref={videoRef}
          className="absolute -z-10 w-full h-full top-0 left-0 object-cover"
        >
          <source src={videoUrl + "#t=0.1"} />
        </motion.video>
      )}
      <Label className="p-6" layoutId={id + "label"}>
        {label}
      </Label>
      <div className="p-6 pt-16 mt-auto rounded-lg bg-gradient-to-b from-transparent to-black">
        <ItemHeading layoutId={id + "name"}>{name}</ItemHeading>
        <Paragraph>{shortDesc}</Paragraph>
      </div>
      <motion.div className="absolute bottom-5 right-5 text-xl">
        <RiArrowRightUpLine />
      </motion.div>
    </motion.div>
  );
};

export default FeatureItem;
