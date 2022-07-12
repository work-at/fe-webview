import { ReactElement } from "react";
import * as icons from "@/assets/svg";

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as IconType[];

export type IconProps = {
  icon: IconType;
  size?: string | number;
};

export const Icon = ({ icon, size }: IconProps): ReactElement => {
  const SVGIcon = icons[icon];
  const widthPx = size && (typeof size === "number" ? `${size}px` : `${size.replace("px", "")}px`);
  return (
    <SVGIcon
      style={{
        width: widthPx,
        height: "auto",
      }}
    />
  );
};
