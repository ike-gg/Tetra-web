import Heading from "@/components/ui/heading/Heading";
import featuresData from "./featuresData";
import FeatureItem from "./FeatureItem";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import FeatureActive from "./FeatureActive";
import MasonryLayout from "@/components/layout/MasonryLayout";

const Features = () => {
  const [activeId, setActiveId] = useState<string>();

  const handleIdChange = (id: string) => {
    setActiveId(id);
  };

  const handleIdRemove = () => {
    setActiveId(undefined);
  };

  useEffect(() => {
    // document.body.style.overflow = activeId ? "hidden" : "auto";
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
    <motion.section className="flex flex-col gap-12">
      <Heading>Core features of tetra</Heading>
      <MasonryLayout>{featuresElements}</MasonryLayout>
      <AnimatePresence>
        {activeId && (
          <FeatureActive activeId={activeId} discardHandler={handleIdRemove} />
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Features;
