import styled from "styled-components";
import { theme } from "@/assets/styles/theme";
import { ButtonProps } from "./Button";

type StyledButtonProps = Omit<ButtonProps, "children">;

export const Button = styled.button<StyledButtonProps>`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  color: ${theme.colors.black};
  background: ${theme.colors.white};
  > svg {
    margin-right: 5px;
  }

  ${(props) =>
    props.shadow &&
    `
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
		`};
  ${(props) =>
    props.round &&
    `
      border-radius: 17px;
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
			font-size: 23px;
      font-weight: 600;
      padding: 22px 0 33px;
		`};
  ${(props) =>
    props.size === "md" &&
    `
			height: 55px;
			padding: 0 36px;
			font-size: 20px;
		`};
  ${(props) =>
    props.size === "sm" &&
    `
			height: 34px;
			padding: 0 15px;
			font-size: 13px;
      font-weight: 500;
		`};

  ${(props) =>
    props.bgColor === "black" &&
    !props.disabled &&
    `
			background: ${theme.colors.black};
			color: ${theme.colors.white};
		`};

  ${(props) =>
    props.bgColor === "blue" &&
    !props.disabled &&
    `
			background: ${theme.colors.mainColor};
			color: ${theme.colors.white};
		`};

  ${(props) =>
    props.bgColor === "white" &&
    !props.disabled &&
    `
			background: ${theme.colors.white};
			color: ${theme.colors.black};
		`};
`;
