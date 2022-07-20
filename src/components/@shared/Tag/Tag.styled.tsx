import styled from "styled-components";
import { theme } from "@/assets/styles/theme";

export const Tag = styled.div`
  position: relative;
  display: block;
  width: calc(100% - 50px);
  border-radius: 19px;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1);
  background: ${theme.colors.white};
  margin-top: 13px;
  &:nth-child(1) {
    margin-top: 0;
    width: 100%;
  }
  &:nth-child(2) {
    width: calc(100% - 25px);
  }
`;

export const TagIcon = styled.span`
  position: absolute;
  display: flex;
  top: 4px;
  left: 14px;
`;

export const TagTxt = styled.span`
  display: block;
  ${theme.fonts.Medium02};
  color: ${theme.colors.black};
  padding: 8px 62px 7px 53px;
`;

export const TagNum = styled.span`
  position: absolute;
  display: block;
  top: 11px;
  right: 12px;
  color: ${theme.colors.gray04};
  ${theme.fonts.Medium05};
  text-align: right;
`;
