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
          "flex flex-col text-center gap-5",
          "md:grid md:grid-cols-3 lg:gap-10 md:gap-4"
        )}
      >
        {statistics.map(({ name, value }) => {
          return (
            <article
              key={name}
              className="bg-gradient-to-bl from-tetra-600 to-black p-0.5 rounded-lg "
            >
              <div className="bg-black py-10 rounded-lg text-center overflow-hidden">
                <Heading className="text-4xl md:text-2xl lg:text-4xl">
                  {value}
                </Heading>
                <Paragraph>{name}</Paragraph>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
