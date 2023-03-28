/* eslint-disable @next/next/no-img-element */
import ItemHeading from "@/components/ui/heading/ItemHeading";
import SubHeading from "@/components/ui/heading/SubHeading";
import Label from "@/components/ui/label/Label";
import { TetraApiEmote } from "@/types/tetraApi/TetraApiEmote";
import { FC } from "react";

interface Props {
  emote: TetraApiEmote;
}

const TaskEmote: FC<Props> = ({ emote }) => {
  const { animated, id, name, origin, preview, author } = emote;
  return (
    <div className="flex flex-col gap-2">
      <header className="flex gap-4 items-center">
        <SubHeading>{name}</SubHeading>
        <p>by {author}</p>
        {animated && (
          <Label className="bg-neutral-700 p-1 px-3 rounded-full">
            ANIMATED
          </Label>
        )}
      </header>
      <img
        src={preview}
        alt="preview of emote"
        className="w-20 border border-neutral-600"
      />
      <div className="flex gap-2 items-end">
        <ItemHeading>{"emote from " + origin}</ItemHeading>
      </div>
      <p className="opacity-40 text-sm">{id}</p>
    </div>
  );
};

export default TaskEmote;
