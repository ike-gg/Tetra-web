import { AnimationProps } from "framer-motion";

const showUp = (delay: number) => {
  const motionProps: AnimationProps = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    transition: {
      type: "spring",
      stiffness: 120,
      duration: 0.2,
      delay,
    },
  };

  return motionProps;
};

export default showUp;
