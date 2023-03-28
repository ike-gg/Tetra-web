/* eslint-disable @next/next/no-img-element */
import { FC, forwardRef, ImgHTMLAttributes, useEffect, useRef } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  buffer: Buffer;
}

type Ref = HTMLImageElement;

const BufferImage = forwardRef<Ref, Props>(
  ({ buffer, className, alt, ...props }, ref) => {
    const base64 = buffer.toString("base64");

    return (
      <img
        ref={ref}
        className={className}
        alt={alt}
        src={`data:image/png;base64, ${base64}`}
      />
    );
  }
);

BufferImage.displayName = "BufferImage";

export default BufferImage;
