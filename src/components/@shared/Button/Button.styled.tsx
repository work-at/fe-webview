import styled from "styled-components";
import { theme } from "@/assets/styles/theme";
import { ButtonProps } from "./Button";

type StyledButtonProps = Omit<ButtonProps, "children">;

export const Button = styled.button<StyledButtonProps>`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid ${theme.colors.gray06};
  color: ${theme.colors.gray05};
  background: ${theme.colors.white};
  > svg {
    margin-right: 5px;
  }

  ${(props) =>
    props.shadow &&
    `
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
      border: none;
		`};

  ${(props) =>
    props.size === "lg" &&
    `
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
			width: 100%;
			height: 84px;
      padding: 22px 0 33px;
      font-size: ${theme.fonts.SemiBold00.fontSize};
      line-height: ${theme.fonts.SemiBold00.lineHeight};
      font-weight: ${theme.fonts.SemiBold00.fontWeight};
		`};
  ${(props) =>
    props.size === "md" &&
    props.round &&
    `
			height: 34px;
			padding: 0 15px;
      border-radius: 17px;
      font-size: ${theme.fonts.Medium06.fontSize};
      line-height: ${theme.fonts.Medium06.lineHeight};
      font-weight: ${theme.fonts.Medium06.fontWeight};
		`};
  ${(props) =>
    props.size === "sm" &&
    props.round &&
    `
			height: 29px;
			padding: 0 13px;
      border-radius: 44px;
      font-size: ${theme.fonts.Medium06.fontSize};
      line-height: ${theme.fonts.Medium06.lineHeight};
      font-weight: ${theme.fonts.Medium06.fontWeight};
		`};

  ${(props) =>
    props.bgColor === "black" &&
    !props.disabled &&
    `
			background: ${theme.colors.black};
			color: ${theme.colors.white};
      border-color: ${theme.colors.black};
		`};

  ${(props) =>
    props.bgColor === "blue" &&
    !props.disabled &&
    `
			background: ${theme.colors.mainColor};
			color: ${theme.colors.white};
      border-color: ${theme.colors.mainColor};
		`};

  ${(props) =>
    props.bgColor === "white" &&
    !props.disabled &&
    `
			background: ${theme.colors.white};
			color: ${theme.colors.black};
      border-color: ${theme.colors.white};
		`};
`;
