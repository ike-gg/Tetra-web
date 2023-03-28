import { ProcessActions } from "@/app/taskStore/processSlice";
import { useEmoteDispatch, useEmoteSelector } from "@/app/taskStore/taskStore";
import Button from "@/components/ui/button/Button";
import Slider from "@/components/ui/slider/Slider";
import classNames from "classnames";
import { useState } from "react";

const CutOpt = () => {
  const dispatch = useEmoteDispatch();
  const { frames } = useEmoteSelector((state) => state.emote);

  const [isActive, setIsActive] = useState(false);

  const toggleOption = () => {
    setIsActive((prevState) => {
      if (prevState) {
        dispatch(ProcessActions.removeCut());
      }
      if (!prevState) {
        dispatch(
          ProcessActions.updateCut([
            [1, 1],
            [frames!, frames!],
          ])
        );
      }
      return !prevState;
    });
  };

  const handleValueChange = (value: number[]) => {
    console.log(value);
    dispatch(
      ProcessActions.updateCut([
        [1, value[0]],
        [value[1], frames!],
      ])
    );
  };

  return (
    <div className="flex flex-col">
      <Button
        className={classNames({
          "bg-neutral-300 text-neutral-800 border-neutral-500": isActive,
        })}
        onClick={toggleOption}
      >
        Cut frames
      </Button>
      {isActive && (
        <Slider
          handleValueChange={handleValueChange}
          min={2}
          max={frames || 0}
          defaultValue={[1, frames || 0]}
          showLabels={true}
        />
      )}
    </div>
  );
};

export default CutOpt;
