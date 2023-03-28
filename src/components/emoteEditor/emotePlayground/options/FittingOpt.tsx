import { FittingProperty, ProcessActions } from "@/app/taskStore/processSlice";
import { useEmoteDispatch, useEmoteSelector } from "@/app/taskStore/taskStore";
import Button from "@/components/ui/button/Button";
import BufferImage from "@/components/ui/images/BufferImage";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const FittingOpt = () => {
  const dispatch = useEmoteDispatch();
  const { fitting } = useEmoteSelector((state) => state.process);

  const [isActive, setIsActive] = useState(false);
  const [isSet, setIsSet] = useState(false);

  const toggleOption = () => {
    setIsActive((prevState) => {
      if (prevState) {
        dispatch(ProcessActions.removeFitting());
      }
      return !prevState;
    });
  };

  const submitFit = () => {
    setIsSet(true);
    setIsActive(false);
  };

  const resetFit = () => {
    dispatch(ProcessActions.removeFitting());
    setIsSet(false);
  };

  const options = ["cover", "contain", "fill"].map((fit) => (
    <Button
      key={fit}
      className={classNames({
        "bg-neutral-300 text-neutral-800 border-neutral-500": fitting === fit,
      })}
      onClick={() => {
        dispatch(ProcessActions.updateFitting(fit as FittingProperty));
        setIsSet(true);
        setIsActive(false);
      }}
    >
      {fit}
    </Button>
  ));

  return (
    <>
      <div className="flex flex-col gap-2">
        <Button
          className={classNames({
            "bg-neutral-300 text-neutral-800 border-neutral-500": isActive,
          })}
          onClick={toggleOption}
        >
          {fitting || "Select fit option"}
        </Button>
        {isSet && (
          <Button onClick={resetFit} className="bg-red-600">
            Reset fitting
          </Button>
        )}
      </div>
      {isActive && (
        <div className="fixed w-full h-full top-0 left-0 z-40 bg-black/50 flex justify-center items-center">
          <div className="bg-neutral-800 rounded-md p-8 flex flex-col gap-8">
            <Image
              src="/images/fitting.png"
              width={400}
              height={200}
              alt="fitting options"
            />
            {options}
          </div>
        </div>
      )}
    </>
  );
};

export default FittingOpt;
