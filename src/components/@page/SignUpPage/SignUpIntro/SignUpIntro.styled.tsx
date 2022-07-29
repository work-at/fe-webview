import styled from "styled-components";
import { theme } from "@/assets/styles/theme";
import BgVisual from "@/assets/images/signup-intro.png";

export const SignUpIntro = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url(${BgVisual}) center center no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const Logo = styled.h1`
  padding: 55px 7.4667vw 0;
`;

export const IntroTxt = styled.p`
  ${theme.fonts.Bold02};
  color: ${theme.colors.white};
  padding: 80px 7.4667vw 0;
`;

export const BtnKaKaoLogin = styled.button`
  position: absolute;
  left: 7.4667vw;
  right: 7.4667vw;
  bottom: 74px;
  > img {
    width: 100%;
  }
`;
