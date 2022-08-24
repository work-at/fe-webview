import styled from "styled-components";
import { theme } from "@/assets/styles/theme";

export const MySettingWrap = styled.div``;

export const SettingList = styled.ul``;

export const SettingItem = styled.li`
  display: flex;
  justify-content: space-between;
  ${theme.fonts.Bold04};
  color: ${theme.colors.gray01};
  border-top: 1px solid ${theme.colors.gray08};
  padding: 30px 7.4667vw;
  &:first-child {
    border-top: none;
  }
`;

export const ToggleWrapper = styled.div`
  position: relative;
`;

export const ToggleBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 26px;
  border-radius: 13px;
  background: ${theme.colors.gray07};
  cursor: pointer;
  &:after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 3px;
    background: ${theme.colors.white};
    transition: 0.2s;
  }
`;

export const ToggleBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 13px;
  width: 50px;
  height: 26px;
  &:checked + ${ToggleBoxLabel} {
    background: ${theme.colors.mainColor};
    &:after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      margin-left: 26px;
      transition: 0.2s;
    }
  }
`;

export const BtnLogout = styled.button`
  ${theme.fonts.Bold04};
  color: ${theme.colors.gray01};
`;
