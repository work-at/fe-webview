import styled from "styled-components";
import { theme } from "@/assets/styles/theme";
import { Z_INDEX } from "@/constants/zIndex";
import { HeaderProps } from "./Header";

type StyledHeaderProps = Omit<HeaderProps, "useRefresh">;

export const Header = styled.div<StyledHeaderProps>`
  padding-top: 52px;
  z-index: 100;
  ${({ bgColor }) =>
    bgColor
      ? `
      background: ${theme.colors.white};
      position: relative;
    `
      : `
      position: absolute;
    `}
  ${({ fixed }) =>
    fixed &&
    `
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    `}
  top: 0;
  left: 0;
  width: 100%;
`;

export const HeaderInner = styled.div<{ useBack?: boolean }>`
  position: relative;
  padding: 0px 7.4667vw 17px 0;
  padding-left: ${({ useBack }) => (useBack ? "16px" : "28px")};
  display: flex;
  align-items: center;
`;

export const Logo = styled.h1``;

export const BtnBack = styled.button<{ bgColor?: boolean }>`
  path {
    stroke: ${({ bgColor }) => (bgColor ? theme.colors.black : theme.colors.white)};
  }
`;

export const Tit = styled.h2<StyledHeaderProps>`
  ${theme.fonts.Bold03};
  color: ${theme.colors.black};
  padding-left: ${({ useBack }) => (useBack ? "7px" : "0")};
  ${({ useLink }) =>
    useLink &&
    `
      display: flex;
      flex: 1;
      justify-content: center;
    `}
`;

export const TitBtn = styled.button`
  ${theme.fonts.Bold03};
  color: ${theme.colors.black};
  text-align: center;
`;

export const BtnReset = styled.button`
  display: flex;
  position: absolute;
  top: 3px;
  right: 7.4667vw;
`;

export const BtnSearch = styled(BtnReset)``;
