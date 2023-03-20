import Heading from "@/components/ui/heading/Heading";
import featuresData from "./featuresData";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import FeatureItem from "./FeatureItem";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import FeatureActive from "./FeatureActive";

const Features = () => {
  const [activeId, setActiveId] = useState<string>();

  const handleIdChange = (id: string) => {
    setActiveId(id);
  };

  const handleIdRemove = () => {
    setActiveId(undefined);
  };

  useEffect(() => {
    document.body.style.overflow = activeId ? "hidden" : "auto";
  }, [activeId]);

  const featuresElements = featuresData.map((feature) => {
    return (
      <FeatureItem
        featureData={feature}
        key={feature.id}
        setActive={handleIdChange}
      />
    );
  });

  return (
    <motion.section className="flex flex-col gap-4">
      <Heading>Core features of tetra</Heading>
      <ResponsiveMasonry columnsCountBreakPoints={{ 640: 1, 768: 2 }}>
        <Masonry columnsCount={2} gutter={"2rem"}>
          {featuresElements}
        </Masonry>
      </ResponsiveMasonry>
      <AnimatePresence>
        {activeId && (
          <FeatureActive activeId={activeId} discardHandler={handleIdRemove} />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Features;
