import * as RSlider from "@radix-ui/react-slider";
import classNames from "classnames";
import { FC, useState } from "react";

interface Props {
  min: number;
  max: number;
  defaultValue: number[];
  showLabels?: boolean;
  handleValueChange?: (value: number[]) => void;
}

const Slider: FC<Props> = ({
  max,
  min,
  showLabels = false,
  defaultValue,
  handleValueChange,
}) => {
  const [value, setValue] = useState<number[]>(defaultValue);
  return (
    <div className="flex flex-col">
      {showLabels && (
        <div className="flex justify-between text-base translate-y-1 items-end">
          <p className="opacity-50 text-xs">{min}</p>
          <p>{value.join(" - ")}</p>
          <p className="opacity-50 text-xs">{max}</p>
        </div>
      )}
      <RSlider.Root
        min={min}
        max={max}
        value={value}
        minStepsBetweenThumbs={2}
        onValueChange={(value) => {
          setValue(value);
          if (handleValueChange) handleValueChange(value);
        }}
        className="relative flex h-4 w-full touch-none items-center"
      >
        <RSlider.Track className="relative h-2 w-full grow rounded-full bg-neutral-800 overflow-hidden">
          <RSlider.Range className="absolute h-full rounded-full bg-neutral-500 rounded-r-sm" />
        </RSlider.Track>
        <RSlider.Thumb
          className={classNames(
            "block h-3 w-3 rounded-lg bg-white",
            "focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-50 hover:cursor-grab active:cursor-grabbing"
          )}
        />
        <RSlider.Thumb
          className={classNames(
            "block h-3 w-3 rounded-lg bg-white",
            "focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-50 hover:cursor-grab active:cursor-grabbing"
          )}
        />
      </RSlider.Root>
    </div>
  );
};

export default Slider;
