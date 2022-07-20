import styled from "styled-components";
import { theme } from "@/assets/styles/theme";

export const CheckboxList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li<{ isIcon?: boolean }>`
  ${({ isIcon }) =>
    isIcon
      ? `
      width: calc((100% - 20px) / 2);
      margin: 15px 0 0 20px;
    `
      : `
      width: calc((100% - 20px) / 3);
      margin: 10px 0 0 10px;
    `}
  &:nth-child(odd) {
    margin-left: ${({ isIcon }) => (isIcon ? "0px" : "")};
  }
  &:nth-of-type(1) {
    margin-left: ${({ isIcon }) => (isIcon ? "" : "0px")};
  }
  &:nth-of-type(4n + 0) {
    margin-left: ${({ isIcon }) => (isIcon ? "" : "0px")};
  }
  & > div {
    width: 100%;
  }
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckbox = styled.input<{ checked: boolean }>`
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
    ${({ checked }) =>
      checked
        ? `
      color: ${theme.colors.mainColor};
      border-color: ${theme.colors.mainColor};
    `
        : `
      color: ${theme.colors.black};
      border-color: ${theme.colors.white};
    `}
  }
`;

export const Label = styled.label<{ isIcon?: boolean }>`
  ${({ isIcon }) =>
    isIcon
      ? `
      padding: 7px 17px;
      border-radius: 10px;
      text-align: left;
    `
      : `
      padding: 9px 34px;
      border-radius: 19px;
      text-align: center;
    `}
  display: block;
  background: ${theme.colors.white};
  box-shadow: 0px 0.7px 5px rgba(0, 0, 0, 0.15);
  border: 1px solid ${theme.colors.white};
  color: ${theme.colors.black};
  white-space: pre-wrap;
  box-sizing: border-box;
  cursor: pointer;
  > svg {
    margin-bottom: 7px;
  }
`;

export const LabelTxt = styled.span`
  display: block;
  ${theme.fonts.Medium03};
`;
