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

  transition: background-color 0.5s, color 0.5s;

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
    `
			height: 44px;
      padding: 0 24px;
      font-size: ${theme.fonts.SemiBold03.fontSize};
      line-height: ${theme.fonts.SemiBold03.lineHeight};
      font-weight: ${theme.fonts.SemiBold03.fontWeight};
		`};
  ${(props) =>
    props.size === "md" &&
    props.round &&
    `
    border-radius: 22px;
    `};

  ${(props) =>
    props.size === "sm" &&
    `
			padding: 6px 13px 5px;
      font-size: ${theme.fonts.Medium06.fontSize};
      line-height: ${theme.fonts.Medium06.lineHeight};
      font-weight: ${theme.fonts.Medium06.fontWeight};
		`};
  ${(props) =>
    props.size === "sm" &&
    props.round &&
    `
    border-radius: 44px;
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
    props.bgColor === "gray" &&
    !props.disabled &&
    `
			background: ${theme.colors.gray08};
			color: ${theme.colors.black};
      border-color: ${theme.colors.gray08};
		`};
  ${(props) =>
    props.bgColor === "white" &&
    !props.disabled &&
    `
			background: ${theme.colors.white};
			color: ${theme.colors.black};
      border-color: ${theme.colors.white};
		`};

  ${(props) =>
    props.size === "lg" &&
    props.disabled &&
    `
      background: ${theme.colors.gray06};
      color: ${theme.colors.white};
      cursor: default;
    `};

  ${(props) =>
    props.size === "sm" &&
    props.disabled &&
    `
    border: 1px solid ${theme.colors.gray06};
    color: ${theme.colors.gray05};
    background: ${theme.colors.white};
      cursor: default;
    `};

  ${(props) =>
    props.size === "sm" &&
    props.active &&
    `
      background: ${theme.colors.white};
      color: ${theme.colors.mainColor};
      border-color: ${theme.colors.mainColor};
    `};
`;
