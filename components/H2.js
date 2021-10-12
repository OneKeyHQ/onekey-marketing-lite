import { useLocale } from "@onekeyhq/ui-components";
import cx from "classnames";

export default function H2({ children, className }) {
  return (
    <h2
      className={cx(
        "text-[28px] md:text-5xl leading-[38px] font-semibold",
        !!className && className,
        { "md:leading-snug": useLocale().locale === "zh-CN" }
      )}
    >
      {children}
    </h2>
  );
}
