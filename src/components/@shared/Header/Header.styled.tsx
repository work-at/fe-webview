import styled from "styled-components";
import { theme } from "@/assets/styles/theme";
import { Z_INDEX } from "@/constants/zIndex";
import { HeaderProps } from "./Header";

type StyledHeaderProps = Omit<HeaderProps, "useRefresh">;

export const Header = styled.div<StyledHeaderProps>`
  padding-top: 52px;
  height: 97px;
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
  padding: 0px 7.4667vw;
  padding-left: ${({ useBack }) => (useBack ? "16px" : "28px")};
  display: flex;
  align-items: center;
`;

export const Logo = styled.h1``;

export const MagazineLogo = styled.h1`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const BtnBack = styled.button<{ bgColor?: boolean }>`
  path {
    stroke: ${({ bgColor }) => (bgColor ? theme.colors.black : theme.colors.white)};
  }
`;

export const Tit = styled.h1<StyledHeaderProps>`
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

export const SearchInputWrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  margin-left: 8px;
`;

export const SearchInput = styled.input<React.InputHTMLAttributes<HTMLInputElement>>`
  display: inline-block;
  width: 100%;
  height: 36px;
  padding: 0 54px 0 15px;
  background: ${theme.colors.gray08};
  border: none;
  outline: none;
  color: ${theme.colors.black};
  ${theme.fonts.Medium03};
  box-shadow: none;
  transform: translateZ(0);
  border-radius: 36px;
`;

export const BtnConfirm = styled.button`
  position: absolute;
  top: 6px;
  right: 16px;
  path {
    fill: ${theme.colors.gray06};
  }
`;
