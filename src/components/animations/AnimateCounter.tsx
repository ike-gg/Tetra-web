import { animate } from "framer-motion";
import { FC, useEffect, useRef } from "react";

interface Props {
  start: number;
  end: number;
  text: string;
  delay?: number;
  duration?: number;
}

const AnimateCounter: FC<Props> = ({
  end,
  start,
  text,
  delay = 0,
  duration = 3,
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    animate(start, end, {
      duration,
      delay,
      ease: [0, 0.61, 0, 0.98],
      onUpdate(value) {
        if (ref.current) {
          ref.current.textContent = `${String(Math.floor(value))}${text}`;
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span ref={ref}></span>;
};

export default AnimateCounter;
