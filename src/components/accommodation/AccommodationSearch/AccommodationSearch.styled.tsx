import styled from "styled-components";
import { theme } from "@/assets/styles/theme";

export const AccommSearchWrap = styled.div`
  position: relative;
  padding-bottom: 50px;
`;

export const SearhchTit = styled.p`
  ${theme.fonts.SemiBold02};
  color: ${theme.colors.black};
  padding: 40px 7.4667vw 20px;
`;

export const ScrollWrap = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const ScrollInner = styled.div`
  -webkit-overflow-scrolling: touch;
  overflow: hidden;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const InfoList = styled.ul`
  padding: 0 0 0 7.4667vw;
  white-space: nowrap;
`;

export const InfoListItem = styled.li`
  display: inline-grid;
  position: relative;
  margin-right: 12px;
  overflow: hidden;
  &:last-child {
    margin-right: 7.4667vw;
  }
`;

export const BtnInfo = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border: 1px solid ${theme.colors.gray09};
  filter: drop-shadow(0px 1px 7px rgba(0, 0, 0, 0.1));
  border-radius: 12px;
`;

export const InfoTxt = styled.p`
  ${theme.fonts.Medium05};
  color: ${theme.colors.gray02};
  padding-top: 7px;
  text-align: center;
  white-space: pre-line;
`;

export const ReviewList = styled.ul`
  padding: 0 7.4667vw;
  margin: -13px 0 0 -9px;
`;

export const ReviewListItem = styled.li`
  display: inline-flex;
  width: calc((100% - 27px) / 3);
  margin: 13px 0 0 9px;
`;

export const BtnReview = styled.button`
  ${theme.fonts.Medium04};
  color: ${theme.colors.black};
  line-height: 38px;
  width: 100%;
  border-radius: 19px;
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.1);
`;
