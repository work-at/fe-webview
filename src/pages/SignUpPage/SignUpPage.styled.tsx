import styled from "styled-components";
import { theme } from "@/assets/styles/theme";
import BgVisual from "@/assets/images/signup-finish.png";

export const SignUpWrap = styled.div`
  padding: 13px 7.4667vw 135px;
`;

export const SignUpTit = styled.h2`
  ${theme.fonts.Bold01};
  color: ${theme.colors.black};
`;

export const SignUpSubTit = styled.p`
  display: block;
  padding-top: 6px;
  ${theme.fonts.Medium06};
  color: ${theme.colors.gray05};
`;

export const SignUpInputWrap = styled.div`
  margin-top: 107px;
`;

export const ChekBoxWrap = styled.div`
  padding: 25px 0 0;
  & + h2 {
    padding-top: 85px;
  }
`;

export const SignUpFinish = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 84px);
  background: url(${BgVisual}) -20vw center no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const FinishTxt = styled.p`
  ${theme.fonts.Bold02};
  color: ${theme.colors.white};
  padding: 115px 7.4667vw 0;
  text-align: center;
`;
