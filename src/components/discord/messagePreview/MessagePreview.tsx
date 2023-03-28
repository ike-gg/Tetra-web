/* eslint-disable @next/next/no-img-element */
import BufferImage from "@/components/ui/images/BufferImage";
import Label from "@/components/ui/label/Label";
import { FC } from "react";

interface Props {
  username: string;
  avatar: string;
  emoteBuffer: Buffer;
  className?: string;
}

const DCMessagePreview: FC<Props> = ({
  avatar,
  emoteBuffer,
  username,
  className,
}) => {
  return (
    <section className={className}>
      <Label>Discord Preview</Label>
      <div className="bg-discord-bg font-discord flex p-5 gap-3 rounded-lg">
        <img src={avatar} alt="avatar" className="rounded-full w-10 h-10" />
        <div>
          <div className="flex gap-1 items-center">
            <h6>{username}</h6>
            <span className="opacity-50 text-sm">Today at 4:28 PM</span>
          </div>
          <p>
            this is inline emote{" "}
            <BufferImage
              buffer={emoteBuffer}
              className="w-[22px] h-[22px] inline object-contain"
            />{" "}
            and below is full size emote:
          </p>
          <BufferImage
            buffer={emoteBuffer}
            className="w-12 h-12 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default DCMessagePreview;
