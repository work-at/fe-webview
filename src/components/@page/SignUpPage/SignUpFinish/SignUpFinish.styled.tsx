import styled from "styled-components";
import { theme } from "@/assets/styles/theme";
import BgVisual from "@/assets/images/signup-finish.jpg";

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
