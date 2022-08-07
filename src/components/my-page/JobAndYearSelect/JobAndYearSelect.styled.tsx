import { theme } from "@/assets/styles/theme";
import styled from "styled-components";

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
