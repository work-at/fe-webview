import styled from "styled-components";
import { theme } from "@/assets/styles/theme";
import { Z_INDEX } from "@/constants/zIndex";
import { HeaderProps } from "./Header";

type StyledHeaderProps = Omit<HeaderProps, "useRefresh">;

export const Header = styled.div<StyledHeaderProps>`
  padding-top: 52px;
  height: 97px;
  z-index: ${Z_INDEX.HIGH};
  ${({ bgColor }) =>
    bgColor
      ? `
      background: ${theme.colors.white};
      position: relative;
    `
      : `
      position: relative;
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
  margin-top: 2px;
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

export const AccommSelectWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  border: none;
  color: ${theme.colors.black};
  ${theme.fonts.Bold03};
`;

export const AccommSelect = styled.select<React.SelectHTMLAttributes<HTMLSelectElement>>`
  height: 100%;
  padding: 0 10px;
  background: transparent;
  border: 0;
  color: inherit;
  font-size: inherit;
  outline: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
`;

export const AccommIconArr = styled.span`
  display: inline-flex;
  width: 0px;
  height: 0px;
  border-right: 6px solid ${theme.colors.black};
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  transform: rotate(-90deg);
`;

export const BtnConfirm = styled.button`
  position: absolute;
  top: 6px;
  right: 16px;
  path {
    fill: ${theme.colors.gray06};
  }
`;
