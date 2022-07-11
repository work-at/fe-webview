import styled from "styled-components";
import { theme } from "@/assets/styles/theme";

export const ToolBar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${theme.colors.white};
  height: 83px;
  z-index: 99;
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

export const ListButton = styled.button`
  display: block;
  width: 100%;
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
