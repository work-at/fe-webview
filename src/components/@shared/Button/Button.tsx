import React from "react";
import * as S from "./Button.styled";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 사이즈 (lg|md|sm) */
  size?: string;
  /** 버튼 컬러(blue|white) */
  bgColor?: string;
  /** 그림자 활성화 여부 (활성화 - >true / 비활성화 -> false) */
  shadow?: boolean;
  /** 둥근 테두리 확성화 여부 (활성화 - >true / 비활성화 -> false) */
  round?: boolean;
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ size, bgColor, shadow, round, children, onClick, ...props }: ButtonProps) => {
  return (
    <S.Button size={size} bgColor={bgColor} shadow={shadow} round={round} onClick={onClick} {...props}>
      {children}
    </S.Button>
  );
};

export default Button;
