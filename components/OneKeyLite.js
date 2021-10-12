import Image from "next/image";
import cx from "classnames";

export default function OneKeyLite({
  className,
  src = "/images/OneKeyLite@3x.png",
  width = 17,
  height = 11,
}) {
  return (
    <Image
      className={cx("", className)}
      src={src}
      layout="responsive"
      width={width}
      height={height}
      alt="OneKey Lite"
    />
  );
}
