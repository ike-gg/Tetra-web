import { ProcessActions } from "@/app/taskStore/processSlice";
import { useEmoteDispatch } from "@/app/taskStore/taskStore";
import Button from "@/components/ui/button/Button";
import Slider from "@/components/ui/slider/Slider";
import classNames from "classnames";
import { useState } from "react";

const ScaleDownOpt = () => {
  const dispatch = useEmoteDispatch();

  const [isActive, setIsActive] = useState(false);

  const toggleOption = () => {
    setIsActive((prevState) => {
      if (prevState) {
        dispatch(ProcessActions.removeScale());
      }
      if (!prevState) {
        dispatch(ProcessActions.updateScale(100));
      }
      return !prevState;
    });
  };

  const handleValueChange = (value: number[]) => {
    dispatch(ProcessActions.updateScale(value[0]));
  };

  return (
    <div className="flex flex-col">
      <Button
        className={classNames({
          "bg-neutral-300 text-neutral-800 border-neutral-500": isActive,
        })}
        onClick={toggleOption}
      >
        Scale down
      </Button>
      {isActive && (
        <Slider
          handleValueChange={handleValueChange}
          min={1}
          max={100}
          defaultValue={[100]}
          showLabels={true}
        />
      )}
    </div>
  );
};

export default ScaleDownOpt;
