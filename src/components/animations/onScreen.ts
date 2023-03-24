import { AnimationProps } from "framer-motion";

const onScreen = (margin: number = -200) => {
  const motionProp = {
    viewport: {
      once: true,
      margin: `${margin}px`,
    },
  };

  return motionProp;
};

export default onScreen;
