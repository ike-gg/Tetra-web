import Button from "@/components/ui/button/Button";
import Heading from "@/components/ui/heading/Heading";
import Paragraph from "@/components/ui/paragraph/Paragraph";
import { use, useEffect, useRef } from "react";
import { Gradient } from "../../../utils/Gradient";

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
      <canvas
        ref={ref}
        className="shadow-inner absolute -z-10 rounded-2xl"
        id="gradient-canvas"
        data-transition-in
      />
      <div className="z-50 p-7 md:p-20 flex flex-col gap-4">
        <Heading>
          <>
            easy emote management,
            <br /> welcome tetra
          </>
        </Heading>
        <Paragraph className="max-w-lg">
          tetra provides easy way to manage emotes on discord, making you
          possible to import them from such services like 7tv, bttv or ffz
          making it effortless process
        </Paragraph>
        <div className="flex gap-4 mt-14">
          <Button href="">Add to your server</Button>
          <Button>Dasboard</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
