import { ProcessActions } from "@/app/taskStore/processSlice";
import { useEmoteDispatch } from "@/app/taskStore/taskStore";
import Button from "@/components/ui/button/Button";
import Slider from "@/components/ui/slider/Slider";
import classNames from "classnames";
import { useState } from "react";

const ColorsOpt = () => {
  const dispatch = useEmoteDispatch();

  const [isActive, setIsActive] = useState(false);

  const toggleOption = () => {
    setIsActive((prevState) => {
      if (prevState) {
        dispatch(ProcessActions.removeColors());
      }
      if (!prevState) {
        dispatch(ProcessActions.updateColors(256));
      }
      return !prevState;
    });
  };

  const handleValueChange = (value: number[]) => {
    dispatch(ProcessActions.updateColors(value[0]));
  };

  return (
    <div className="flex flex-col">
      <Button
        className={classNames({
          "bg-neutral-300 text-neutral-800 border-neutral-500": isActive,
        })}
        onClick={toggleOption}
      >
        Reduce colors
      </Button>
      {isActive && (
        <Slider
          handleValueChange={handleValueChange}
          min={2}
          max={256}
          defaultValue={[256]}
          showLabels={true}
        />
      )}
    </div>
  );
};

export default ColorsOpt;
