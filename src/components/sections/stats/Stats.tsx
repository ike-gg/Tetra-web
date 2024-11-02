import AnimateCounter from "@/components/animations/AnimateCounter";
import onScreen from "@/components/animations/onScreen";
import showUp from "@/components/animations/showUp";
import Heading from "@/components/ui/heading/Heading";
import Paragraph from "@/components/ui/paragraph/Paragraph";
import classNames from "classnames";
import { motion } from "framer-motion";

const Stats = () => {
  const statistics = [
    { name: "Active servers", from: 2250, to: 2500 },
    { name: "Active users", from: 600000, to: 750000 },
    { name: "Emotes added", from: 60000, to: 80000 },
  ];

  const statsElement = statistics.map(({ name, from, to }, index) => {
    return (
      <motion.article
        {...showUp(0.2 + index * 0.05)}
        key={name}
        className="bg-gradient-to-bl from-tetra-600 to-black p-0.5 rounded-lg"
      >
        <motion.div className="bg-black py-10 rounded-lg text-center overflow-hidden">
          <Heading className="text-4xl md:text-2xl lg:text-4xl">
            <AnimateCounter
              duration={3 + index * 1.2}
              start={from}
              end={to}
              text={"+"}
              key={name + from}
            />
          </Heading>
          <Paragraph>{name}</Paragraph>
        </motion.div>
      </motion.article>
    );
  });

  return (
    <motion.section
      {...{ ...onScreen(), ...showUp(0) }}
      className="flex flex-col gap-8"
    >
      <Heading {...showUp(0.1)}>Tetra stats</Heading>
      <div
        className={classNames(
          "flex flex-col text-center gap-5",
          "md:grid md:grid-cols-3 lg:gap-10 md:gap-4"
        )}
      >
        {statsElement}
      </div>
    </motion.section>
  );
};

export default Stats;
