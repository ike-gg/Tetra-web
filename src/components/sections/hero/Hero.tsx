import Button from "@/components/ui/button/Button";
import Heading from "@/components/ui/heading/Heading";
import Paragraph from "@/components/ui/paragraph/Paragraph";
import { useEffect, useRef } from "react";
import { Gradient } from "../../../utils/Gradient.js";
import { motion, Variants } from "framer-motion";

const gradient = new Gradient();

const Hero = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      gradient.initGradient("#gradient-canvas");
    }
  }, [ref]);

  return (
    <section className="relative">
      <motion.canvas
        ref={ref}
        className="shadow-inner absolute -z-10 rounded-2xl"
        id="gradient-canvas"
        data-transition-in
      />
      <div className="z-50 p-7 md:p-14 lg:p-20 flex flex-col gap-4">
        <Heading>
          <>
            easy emote management,
            <br /> welcome tetra
          </>
        </Heading>
        <Paragraph className="max-w-lg">
          Tetra provides an effortless way to manage emotes on Discord, making
          it possible for you to import them from services such as 7TV, BTTV, or
          FFZ
        </Paragraph>
        <div className="flex flex-col gap-4 mt-20 md:mt-14 md:flex-row">
          <Button href="">Add to your server</Button>
          <Button disabled label="upcoming">
            Dashboard
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
