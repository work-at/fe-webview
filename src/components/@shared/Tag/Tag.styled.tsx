import styled from "styled-components";
import { theme } from "@/assets/styles/theme";

export const Tag = styled.div`
  position: relative;
  display: block;
  border-radius: 20px;
  box-shadow: 0px 0.7px 5px rgba(0, 0, 0, 0.15);
  background: ${theme.colors.white};
  margin-top: 10px;
  &:first-child {
    margin-top: 0;
  }
`;

export const TagIcon = styled.span`
  position: absolute;
  display: flex;
  top: 7px;
  left: 17px;
`;

export const TagTxt = styled.span`
  display: block;
  font-size: 17px;
  line-height: 20px;
  padding: 9px 22px 9px 53px;
  color: ${theme.colors.black100};
`;

export const TagNum = styled.span`
  position: absolute;
  display: block;
  top: 0;
  right: 20px;
  font-size: 14px;
  line-height: 38px;
  color: #747477;
  text-align: right;
`;
