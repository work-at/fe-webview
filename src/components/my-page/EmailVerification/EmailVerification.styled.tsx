import styled from "styled-components";
import { theme } from "@/assets/styles/theme";

export const SignUpWrap = styled.form`
  padding: 13px 7.4667vw 0;
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

export const ErrorTxt = styled.p`
  white-space: pre-line;
  ${theme.fonts.Medium06};
  color: ${theme.colors.seoul};
  margin-top: 10px;
`;

export const SuccessTxt = styled(ErrorTxt)`
  color: ${theme.colors.mainColor};
`;
