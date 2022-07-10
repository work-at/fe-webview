import { ReactElement } from "react";
import * as icons from "@/assets/svg";

export type IconType = keyof typeof icons;
export const iconTypes: IconType[] = Object.keys(icons) as IconType[];

export type IconProps = {
  icon: IconType;
  color?: string;
  stroke?: string;
  size?: string | number;
};
const NORMAL_STROKE_COLOR = "#606161";

export const Icon = ({ icon, stroke, size }: IconProps): ReactElement => {
  const SVGIcon = icons[icon];
  const strokeColor = stroke || NORMAL_STROKE_COLOR;
  const widthPx = size && (typeof size === "number" ? `${size}px` : `${size.replace("px", "")}px`);
  return (
    <SVGIcon
    // style={{
    //   color: strokeColor,
    //   width: widthPx,
    //   height: 'auto',
    // }}
    />
  );
};

// export default Icon;
