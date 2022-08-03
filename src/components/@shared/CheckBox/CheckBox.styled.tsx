import styled from "styled-components";
import { theme } from "@/assets/styles/theme";
import { CheckboxProps } from "./CheckBox";

type StyledCheckBoxProps = Pick<CheckboxProps, "isIcon" | "widthAuto" | "checked">;

export const CheckboxList = styled.ul<StyledCheckBoxProps>`
  display: flex;
  flex-wrap: wrap;
  ${(props) =>
    props.isIcon
      ? `
      margin: -15px 0 0 -20px;
    `
      : `
      margin: -13px 0 0 -9px;
    `}
`;

export const ListItem = styled.li<StyledCheckBoxProps>`
  ${(props) =>
    props.isIcon
      ? `
      width: calc((100% - 40px) / 2);
      margin: 15px 0 0 20px;
    `
      : `
      width: calc((100% - 27px) / 3);
      margin: 13px 0 0 9px;
    `}
  ${(props) =>
    !props.isIcon &&
    props.widthAuto &&
    `
      width: auto;
    `}
  & > div {
    width: 100%;
  }
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckbox = styled.input<StyledCheckBoxProps>`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  & + label {
    ${(props) =>
      props.checked
        ? `
      color: ${theme.colors.mainColor};
      border-color: ${theme.colors.mainColor};
    `
        : `
      color: ${theme.colors.black};
      border-color: ${theme.colors.white};
    `}
    span {
      ${(props) =>
        props.checked &&
        `
        font-weight: 700;
      `}
    }
  }
`;

export const Label = styled.label<StyledCheckBoxProps>`
  ${(props) =>
    props.isIcon
      ? `
      padding: 7px 17px;
      border-radius: 10px;
      text-align: left;
      box-shadow: 0px 0.7px 5px rgba(0, 0, 0, 0.15);
    `
      : `
      padding: 8px 0 6px;
      border-radius: 19px;
      text-align: center;
      box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1);
    `}
  ${(props) =>
    !props.isIcon &&
    props.widthAuto &&
    `
      padding: 8px 16px 6px; 
    `}
  display: block;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.white};
  color: ${theme.colors.black};
  white-space: pre-wrap;
  box-sizing: border-box;
  cursor: pointer;
  > svg {
    margin-bottom: 7px;
  }
`;

export const LabelTxt = styled.span<StyledCheckBoxProps>`
  display: block;

  ${(props) =>
    props.isIcon
      ? `
      min-height: 40px;
      display:flex;
      align-items: center;
      font-size: ${theme.fonts.Medium03.fontSize};
      font-weight: ${theme.fonts.Medium03.fontWeight};
      line-height: ${theme.fonts.Medium03.lineHeight};
    `
      : `
      font-size: ${theme.fonts.Medium02.fontSize};
      font-weight: ${theme.fonts.Medium02.fontWeight};
      line-height: ${theme.fonts.Medium02.lineHeight};
    `}
`;
