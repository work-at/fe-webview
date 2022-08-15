import styled from "styled-components";
import { theme } from "@/assets/styles/theme";
import BgVisual from "@/assets/images/signup-intro.png";
import { Z_INDEX } from "@/constants/zIndex";

export const SignUpIntro = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const SignUpImage = styled.div`
  @keyframes left_to_right {
    0% {
      background-position: 35%;
    }
    100% {
      background-position: 50%;
    }
  }
  top: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: ${Z_INDEX.UNDER_ROOT};

  background: url(${BgVisual}) 50% center no-repeat;
  background-size: cover;
  overflow: hidden;
  animation: left_to_right 3s ease;
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
  > a,
  img {
    width: 100%;
  }
`;
