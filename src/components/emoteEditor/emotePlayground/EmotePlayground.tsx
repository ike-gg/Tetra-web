import { useEmoteSelector } from "@/app/taskStore/taskStore";
import DCMessagePreview from "@/components/discord/messagePreview/MessagePreview";
import BufferImage from "@/components/ui/images/BufferImage";
import Label from "@/components/ui/label/Label";
import { DiscordInteraction } from "@/types/discord/DiscordInteraction";
import { FC, useState } from "react";
import EmoteOptions from "./EmoteOptions";
import SubmitProcess from "./SubmitProcess";

interface Props {
  interaction: DiscordInteraction;
}

const EmotePlayground: FC<Props> = ({ interaction }) => {
  const { modifiedEmote, name, originalEmote } = useEmoteSelector(
    (state) => state.emote
  );

  return (
    <section
      style={{
        backgroundSize: "40px 40px",
        backgroundPosition: "center",
        boxShadow: "inset 0 0 600px 100px rgb(37 99 235)",
      }}
      className="flex gap-2 justify-between p-6 bg-blue-600 bg-lined-grid-white rounded-2xl"
    >
      <div className="bg-white/5 p-4 backdrop-blur-sm rounded-lg border border-neutral-400">
        <Label>ORIGINAL</Label>
        {originalEmote && (
          <BufferImage
            className="w-52 max-h-52 object-contain"
            showSize
            buffer={originalEmote}
          />
        )}
        <Label>MODIFIED</Label>
        {modifiedEmote && (
          <BufferImage
            className="w-52 max-h-52 object-contain"
            showSize
            buffer={modifiedEmote}
          />
        )}
      </div>
      <EmoteOptions />
      <SubmitProcess />
    </section>
  );
};

export default EmotePlayground;
