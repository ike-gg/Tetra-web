import { AnimationProps } from "framer-motion";

const showDown = (delay: number) => {
  const motionProps: AnimationProps = {
    initial: {
      y: -50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
    },
    transition: {
      type: "spring",
      stiffness: 50,
      bounce: 0,
      duration: 0.2,
      delay,
    },
  };

  return { ...motionProps };
};

export default showDown;
