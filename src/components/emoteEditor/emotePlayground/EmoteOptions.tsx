import { useEmoteSelector } from "@/app/taskStore/taskStore";
import Button from "@/components/ui/button/Button";
import Label from "@/components/ui/label/Label";
import Slider from "@/components/ui/slider/Slider";
import EmoteSizeMeter from "./EmoteSizeMeter";
import ColorsOpt from "./options/ColorsOpt";
import CroppingOpt from "./options/CroppingOpt";
import CutOpt from "./options/CutOpt";
import FittingOpt from "./options/FittingOpt";

import LossyOpt from "./options/LossyOpt";
import ScaleDownOpt from "./options/ScaleDownOpt";

const EmoteOptions = () => {
  const emote = useEmoteSelector((state) => state.emote);
  const {
    LIMIT,
    animated,
    guildId,
    hasExceededLimit,
    name,
    originalEmote,
    size,
  } = emote;
  return (
    <section className="grid grid-cols-2 h-fit gap-3 my-auto">
      <Label className="col-span-2">CURRENT SIZE</Label>
      <EmoteSizeMeter />
      <div className="mt-3 flex col-span-2 items-center gap-4">
        <Label className="whitespace-nowrap">optimization methods</Label>
        <hr className="basis-full border-neutral-300" />
      </div>
      <LossyOpt />
      <ColorsOpt />
      <ScaleDownOpt />
      <CutOpt />
      <div className="mt-3 flex col-span-2 items-center gap-4">
        <Label className="whitespace-nowrap">CROPPING OPTIONS</Label>
        <hr className="basis-full border-neutral-300" />
      </div>
      <CroppingOpt />
      <FittingOpt />
    </section>
  );
};

export default EmoteOptions;
