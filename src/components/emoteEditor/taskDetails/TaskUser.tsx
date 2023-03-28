/* eslint-disable @next/next/no-img-element */
import ItemHeading from "@/components/ui/heading/ItemHeading";
import SubHeading from "@/components/ui/heading/SubHeading";
import { DiscordInteraction } from "@/types/discord/DiscordInteraction";
import { FC } from "react";

interface Props {
  interaction: DiscordInteraction;
}

const TaskUser: FC<Props> = ({ interaction }) => {
  const { avatarURL, username, id, discriminator } = interaction.user;
  return (
    <div className="flex flex-col gap-2">
      <SubHeading>User</SubHeading>
      <img src={avatarURL} alt="user avatar" className="rounded-full w-20" />
      <div className="flex gap-2 items-end">
        <ItemHeading>{username}</ItemHeading>
        <p className="-translate-y-[2px] opacity-70">#{discriminator}</p>
      </div>
      <p className="opacity-40 text-sm">{id}</p>
    </div>
  );
};

export default TaskUser;
