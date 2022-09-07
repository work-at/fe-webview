import styled from "styled-components";
import { theme } from "@/assets/styles/theme";
import { Z_INDEX } from "@/constants/zIndex";

export const ToolBar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.colors.white};
  height: 90px;
  border-top: 1px solid ${theme.colors.gray09};
  z-index: ${Z_INDEX.HIGH};
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const ListItem = styled.li`
  width: calc(100% / 4);
`;

export const ListButton = styled.button<{ isActive: boolean }>`
  display: block;
  width: 100%;

  path {
    transition: fill 0.5s;
    fill: ${({ isActive }) => (isActive ? theme.colors.gray01 : theme.colors.gray03)};
  }

  span {
    transition: color 0.5s, font-weight 0.5s;
    color: ${({ isActive }) => (isActive ? theme.colors.gray01 : theme.colors.gray03)};
    font-weight: ${({ isActive }) => (isActive ? "700" : "500")};
  }
`;

export const MenuIcon = styled.i`
  display: block;
  width: 24px;
  height: 24px;
  margin: 0 auto 7px;
`;

export const MenuText = styled.span`
  ${theme.fonts.Medium05};
  color: ${theme.colors.gray03};
`;
