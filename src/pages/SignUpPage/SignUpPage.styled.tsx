import styled from "styled-components";
import { theme } from "@/assets/styles/theme";
import BgVisual from "@/assets/images/signup-finish.jpg";
import { Z_INDEX } from "@/constants/zIndex";

export const SignUpWrap = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

export const SignUpPaddingWrap = styled.div`
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

export const ChekBoxWrap = styled.div`
  padding: 25px 0 0;
  & + h2 {
    padding-top: 85px;
  }
`;

export const SignUpFinish = styled.div`
  @keyframes left_to_right {
    0% {
      background-position: 40%;
    }
    100% {
      background-position: 60%;
    }
  }

  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${Z_INDEX.UNDER_ROOT};

  background: url(${BgVisual}) 60% center no-repeat;
  background-size: cover;
  overflow: hidden;
  animation: left_to_right 3s ease;
`;

export const FinishTxt = styled.p`
  ${theme.fonts.Bold02};
  color: ${theme.colors.white};
  padding: 115px 7.4667vw 0;
  text-align: center;
`;
