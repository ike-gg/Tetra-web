import Heading from "@/components/ui/heading/Heading";
import Paragraph from "@/components/ui/paragraph/Paragraph";
import classNames from "classnames";

const Stats = () => {
  const statistics = [
    { name: "Active servers", value: "500+" },
    { name: "Active users", value: "200000+" },
    { name: "Emotes added", value: "9000+" },
  ];

  return (
    <section className="flex flex-col gap-8">
      <Heading>Tetra stats</Heading>
      <div
        className={classNames(
          "flex flex-col text-center",
          "md:grid md:grid-cols-3 md:gap-10"
        )}
      >
        {statistics.map(({ name, value }) => {
          return (
            <article
              key={name}
              className="bg-gradient-to-bl to-tetra-500/20 from-black p-10 rounded-lg "
            >
              <Heading className="text-5xl md:text-5xl">{value}</Heading>
              <Paragraph>{name}</Paragraph>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
