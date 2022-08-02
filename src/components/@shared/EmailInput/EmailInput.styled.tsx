import styled from "styled-components";
import { theme } from "@/assets/styles/theme";

export const InputWrap = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const InputCount = styled.span`
  display: block;
  ${theme.fonts.Medium06};
  color: ${theme.colors.gray05};
`;

export const CountTxt = styled.span``;

export const InputBox = styled.div`
  position: relative;
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
  & + button {
    position: absolute;
    top: 7px;
    right: 0;
  }
`;

export const ErrorTxt = styled.p`
  ${theme.fonts.Medium06};
  color: ${theme.colors.seoul};
  margin-top: 10px;
`;

export const SuccessTxt = styled(ErrorTxt)`
  color: ${theme.colors.mainColor};
`;
