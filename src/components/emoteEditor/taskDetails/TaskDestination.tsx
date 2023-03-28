/* eslint-disable @next/next/no-img-element */
import Heading from "@/components/ui/heading/Heading";
import ItemHeading from "@/components/ui/heading/ItemHeading";
import SubHeading from "@/components/ui/heading/SubHeading";
import { DiscordGuild } from "@/types/discord/DiscordGuild";
import { DiscordInteraction } from "@/types/discord/DiscordInteraction";
import { FC } from "react";

interface Props {
  interaction: DiscordInteraction;
  guild: DiscordGuild;
}

const TaskDestination: FC<Props> = ({ guild, interaction }) => {
  const { icon, id, name } = guild;
  return (
    <div className="flex flex-col gap-2">
      <SubHeading>Emote destination</SubHeading>
      <img src={icon} alt="avatar of guild" className="rounded-full w-20" />
      <div className="flex gap-2 items-end">
        <ItemHeading>{name}</ItemHeading>
      </div>
      <p className="opacity-40 text-sm">{id}</p>
    </div>
  );
};

export default TaskDestination;
