import Image from "next/image";

export default function OneKeyLite({
  className,
  src = "/images/OneKeyLite@3x.png",
  width = "255",
  height = "165",
}) {
  return (
    <Image
      className={className}
      src={src}
      width={width}
      height={height}
      alt="OneKey Lite"
    />
  );
}
