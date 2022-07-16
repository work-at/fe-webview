import styled from "styled-components";
import { theme } from "@/assets/styles/theme";
import { Z_INDEX } from "@/constants/zIndex";

export const ToolBar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.colors.white};
  height: 83px;
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
    fill: ${({ isActive }) => (isActive ? theme.colors.mainColor : "initial")};
  }

  span {
    transition: color 0.5s, font-weight 0.5s;
    color: ${({ isActive }) => (isActive ? theme.colors.mainColor : "initial")};
    font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
  }
`;

export const MenuIcon = styled.i`
  display: block;
  width: 30px;
  height: 30px;
  margin: 0 auto 6px;
`;

export const MenuText = styled.span`
  color: #606161;
  font-size: 12px;
  line-height: 14px;
`;
