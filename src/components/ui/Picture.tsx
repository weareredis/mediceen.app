import type { ImgHTMLAttributes } from "react";

type PictureProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
};

export function Picture({ src, ...imageProps }: PictureProps) {
  return (
    <picture>
      <source srcSet={`${src}.webp`} type="image/webp" />
      <img src={`${src}.png`} {...imageProps} />
    </picture>
  );
}
