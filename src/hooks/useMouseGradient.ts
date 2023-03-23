import { useAnimation } from "framer-motion";
import { MouseEvent, useState } from "react";

const useMouseGradient = (hoverColor?: string, backgroundColor?: string) => {
  const gradient = useAnimation();

  const color = hoverColor ? hoverColor : "#ffffff1d";
  const bg = backgroundColor ? backgroundColor : "transparent";

  const [last, setLast] = useState<{ x: number; y: number }>();

  const handleMouseMove = (e: MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setLast({ x, y });
    gradient.set({
      background: `radial-gradient(circle at ${x}px ${y}px, ${color}, ${bg}, ${bg})`,
      gradientTransform: "20deg",
    });
  };

  const handleMouseLeave = () => {
    gradient.start({
      background: `radial-gradient(circle at 0px 0px, ${bg}, ${bg})`,
    });
  };

  return {
    gradientEffect: gradient,
    handleMouseMove,
    handleMouseLeave,
  };
};

export default useMouseGradient;
