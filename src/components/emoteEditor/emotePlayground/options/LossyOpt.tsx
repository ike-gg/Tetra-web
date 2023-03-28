import { ProcessActions } from "@/app/taskStore/processSlice";
import { useEmoteDispatch } from "@/app/taskStore/taskStore";
import Button from "@/components/ui/button/Button";
import Slider from "@/components/ui/slider/Slider";
import classNames from "classnames";
import { useState } from "react";

const LossyOpt = () => {
  const dispatch = useEmoteDispatch();

  const [isActive, setIsActive] = useState(false);

  const toggleOption = () => {
    setIsActive((prevState) => {
      if (prevState) {
        dispatch(ProcessActions.removeLossy());
      }
      if (!prevState) {
        dispatch(ProcessActions.updateLossy(0));
      }
      return !prevState;
    });
  };

  const handleValueChange = (value: number[]) => {
    dispatch(ProcessActions.updateLossy(value[0]));
  };

  return (
    <div className="flex flex-col">
      <Button
        className={classNames({
          "bg-neutral-300 text-neutral-800 border-neutral-500": isActive,
        })}
        onClick={toggleOption}
      >
        Lossy optimization
      </Button>
      {isActive && (
        <Slider
          handleValueChange={handleValueChange}
          min={0}
          max={200}
          defaultValue={[0]}
          showLabels={true}
        />
      )}
    </div>
  );
};

export default LossyOpt;
