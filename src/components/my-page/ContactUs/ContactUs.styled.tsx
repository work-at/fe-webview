import styled from "styled-components";
import { theme } from "@/assets/styles/theme";

export const MyContactUsWrap = styled.div`
  padding: 16px 7.4667vw 115px;
`;

export const Input = styled.input<React.InputHTMLAttributes<HTMLInputElement>>`
  display: inline-block;
  width: 100%;
  height: 46px;
  padding: 0 80px 0 0;
  background: ${theme.colors.white};
  border: none;
  outline: none;
  border-bottom: 3px solid ${theme.colors.mainColor};
  color: ${theme.colors.black};
  ${theme.fonts.Medium02};
  box-shadow: none;
  transform: translateZ(0);
`;

export const SelectWrap = styled.div`
  position: relative;
  height: 46px;
  border: 1px solid ${theme.colors.gray06};
  margin: 17px 0 22px;
  border-radius: 10px;
  color: ${theme.colors.black};
  ${theme.fonts.Medium02};
`;

export const Select = styled.select<React.SelectHTMLAttributes<HTMLSelectElement>>`
  width: 100%;
  height: 100%;
  padding: 0 32px 0 28px;
  background: transparent;
  border: 0;
  color: inherit;
  font-size: inherit;
  outline: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`;

export const IconArr = styled.span`
  position: absolute;
  top: 50%;
  right: 20px;
  display: block;
  width: 0px;
  height: 0px;
  margin-top: -6px;
  border-right: 6px solid ${theme.colors.black};
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  transform: rotate(-90deg);
`;

export const Txtarea = styled.textarea`
  ${theme.fonts.Medium03};
  color: ${theme.colors.black};
  position: relative;
  display: block;
  width: 100%;
  height: 120px;
  padding: 19px 17px;
  border-radius: 20px;
  border: 0px;
  outline: 0px;
  resize: none;
  word-break: normal;
  min-height: 120px;
  max-height: 300px;
  overflow: auto;
  background-color: ${theme.colors.gray09};
`;
