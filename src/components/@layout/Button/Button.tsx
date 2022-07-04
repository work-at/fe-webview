import React from "react";
import * as S from "./Button.styled";

export type ButtonProps = {
  /** 버튼 사이즈 (lg|md|sm) */
  size : string;
  /** 버튼 컬러(blue|white) */
  bgColor: string;
  /** 그림자 활성화 여부 (활성화 - >true / 비활성화 -> false) */
  shadow: boolean;
  /** 버튼 안의 내용 */
  label: string;
};


export const Button = ({ size, bgColor, shadow, label }: ButtonProps) => {
  return (
    <S.Button
      size={size} 
      bgColor={bgColor}
      shadow={shadow}
    >{label}
    </S.Button>
  );
};

export default Button;
