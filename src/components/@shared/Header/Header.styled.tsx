import styled from "styled-components";
import { theme } from "@/assets/styles/theme";
import { HeaderProps } from "./Header";

type StyledHeaderProps = Omit<HeaderProps, "useBack">;

export const Header = styled.div<StyledHeaderProps>`
  padding-top: 55px;
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
  top: 0;
  left: 0;
  width: 100%;
`;

export const HeaderInner = styled.div<{ useBack?: boolean }>`
  padding: 0px 28px 8px 0;
  padding-left: ${({ useBack }) => (useBack ? "16px" : "28px")};
  display: flex;
  align-items: center;
`;

export const BtnBack = styled.button<{ bgColor?: boolean }>`
  path {
    stroke: ${({ bgColor }) => (bgColor ? theme.colors.black : theme.colors.white)};
  }
`;

export const Tit = styled.h2<{ useBack?: boolean }>`
  ${theme.fonts.Bold03};
  color: ${theme.colors.black};
  padding-left: ${({ useBack }) => (useBack ? "7px" : "0")};
`;
