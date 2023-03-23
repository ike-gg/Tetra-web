import Paragraph from "@/components/ui/paragraph/Paragraph";
import { FC } from "react";

export interface Command {
  name: string;
  optional: boolean;
  exampleValue: string;
}

export type CommandPreview = (Command | string)[];

interface Props {
  commandStructure: CommandPreview;
}

const DCCommandPreview: FC<Props> = ({ commandStructure }) => {
  const commandComponents = commandStructure.map((commandPart) => {
    if (typeof commandPart === "string")
      return (
        <Paragraph className="md:text-base" key={commandPart}>
          {commandPart}
        </Paragraph>
      );

    const { exampleValue, name, optional } = commandPart;

    return (
      <div
        key={name}
        className="border border-neutral-400 rounded-md overflow-hidden"
      >
        <p className="inline p-2.5 bg-neutral-900 text-white">
          {name}
          {optional && <span className="pl-1.5">?</span>}
        </p>
        <p className="inline p-1.5 bg-neutral-700">{exampleValue}</p>
      </div>
    );
  });

  return (
    <div className="flex gap-x-2 gap-y-1 p-3 py-2 bg-discord-bg text-discord-text font-discord items-center rounded-md whitespace-nowrap flex-wrap">
      {commandComponents}
    </div>
  );
};

export default DCCommandPreview;
