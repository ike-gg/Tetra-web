import { MotionConfig } from "framer-motion";
import { FC } from "react";

interface Props {
  children: JSX.Element;
}

const TransitionWrapper: FC<Props> = ({ children }) => {
  return (
    <MotionConfig
      transition={{
        duration: 0.75,
        type: "tween",
      }}
    >
      {children}
    </MotionConfig>
  );
};

export default TransitionWrapper;
