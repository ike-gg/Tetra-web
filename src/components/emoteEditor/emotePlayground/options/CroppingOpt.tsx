import { ProcessActions } from "@/app/taskStore/processSlice";
import { useEmoteDispatch, useEmoteSelector } from "@/app/taskStore/taskStore";
import Button from "@/components/ui/button/Button";
import BufferImage from "@/components/ui/images/BufferImage";
import classNames from "classnames";
import { useRef, useState } from "react";
import { Crop } from "react-image-crop";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const CroppingOpt = () => {
  const { originalEmote } = useEmoteSelector((state) => state.emote);
  const dispatch = useEmoteDispatch();

  const [isActive, setIsActive] = useState(false);
  const [isSet, setIsSet] = useState(false);
  const [crop, setCrop] = useState<Crop>();
  const ref = useRef<HTMLImageElement>(null);

  const toggleOption = () => {
    setIsActive((prevState) => {
      if (prevState) {
        dispatch(ProcessActions.removeCrop());
      }
      return !prevState;
    });
  };

  const submitCrop = () => {
    if (!crop || !ref.current) return;

    const { naturalWidth, width: refWidth } = ref.current;
    const scale = naturalWidth / refWidth;

    const { x, y, width, height } = crop;
    const x1 = Math.floor(x * scale);
    const y1 = Math.floor(y * scale);
    const scaledWidth = width * scale;
    const scaledHeight = height * scale;
    const x2 = Math.floor(x1 + scaledWidth);
    const y2 = Math.floor(y1 + scaledHeight);

    dispatch(
      ProcessActions.updateCrop([
        [x1, y1],
        [x2, y2],
      ])
    );
    setIsSet(true);
    setIsActive(false);
  };

  const resetCrop = () => {
    dispatch(ProcessActions.removeCrop());
    setIsSet(false);
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        <Button
          className={classNames({
            "bg-neutral-300 text-neutral-800 border-neutral-500": isActive,
          })}
          onClick={toggleOption}
        >
          Crop...
        </Button>
        {isSet && (
          <Button onClick={resetCrop} className="bg-red-600">
            Reset crop
          </Button>
        )}
      </div>
      {isActive && (
        <div className="fixed w-full h-full top-0 left-0 z-40 bg-black/50 flex justify-center items-center">
          <div className="bg-neutral-800 rounded-md p-8 flex flex-col gap-8">
            <ReactCrop
              crop={crop}
              onChange={(c) => {
                setCrop(c);
              }}
            >
              <BufferImage className="w-96" buffer={originalEmote!} ref={ref} />
            </ReactCrop>
            <Button onClick={submitCrop}>Submit</Button>
          </div>
        </div>
      )}
    </>
  );
};

export default CroppingOpt;
