import styled from "styled-components";
import { theme } from "@/assets/styles/theme";

export const Tag = styled.div`
  margin-top: 13px;
  &:first-child {
    margin-top: 0;
  }
`;

interface StyledTagInnerProps {
  restWidth: number;
}

export const TagInner = styled.div<StyledTagInnerProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: ${({ restWidth }) => (restWidth === 0 ? "220px" : `calc(220px + ${restWidth}px)`)};
  max-width: 100%;
  border-radius: 19px;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1);
  background: ${theme.colors.white};
`;

export const TagIcon = styled.span`
  display: flex;
  padding: 0 11px 0 17px;
`;

export const TagTxt = styled.span`
  display: block;
  ${theme.fonts.Medium02};
  color: ${theme.colors.black};
  padding: 8px 0 7px;
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
