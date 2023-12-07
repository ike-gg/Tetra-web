import Button from "@/components/ui/button/Button";
import Heading from "@/components/ui/heading/Heading";
import Paragraph from "@/components/ui/paragraph/Paragraph";
import { useEffect, useRef } from "react";
import { Gradient } from "../../../utils/Gradient.js";
import { motion, Variants } from "framer-motion";
import showUp from "../../animations/showUp";

const gradient = new Gradient();

const Hero = () => {
  const BOT_INVITE_LINK =
    "https://discord.com/api/oauth2/authorize?client_id=1029899066911490158&permissions=413390915648&scope=applications.commands%20bot";

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      gradient.initGradient("#gradient-canvas");
    }
  }, [ref]);

  return (
    <section className="relative">
      <motion.canvas
        {...showUp(0.1)}
        ref={ref}
        className="shadow-inner absolute -z-10 rounded-2xl"
        id="gradient-canvas"
        data-transition-in
      />
      <motion.div className="z-50 p-7 md:p-14 lg:p-20 flex flex-col gap-4">
        <Heading {...showUp(0.4)}>
          <>
            easy emote management,
            <br /> welcome tetra
          </>
        </Heading>
        <Paragraph className="max-w-lg" {...showUp(0.5)}>
          Tetra provides an effortless way to manage emotes on Discord, making
          it possible for you to import them from services such as 7TV, BTTV, or
          FFZ
        </Paragraph>
        <motion.div
          {...showUp(0.6)}
          className="flex flex-col gap-4 mt-20 md:mt-14 md:flex-row opacity-70"
        >
          <Button href={BOT_INVITE_LINK}>Add to your server</Button>
          <Button href={"https://panel.tetra.lol"} label="CHECK OUT">
            Panel
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
