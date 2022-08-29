import styled from "styled-components";
import { theme } from "@/assets/styles/theme";

export const AccommDetailWrap = styled.div`
  position: relative;
`;

export const VisualWrap = styled.div`
  > img {
    display: block;
    width: 100%;
  }
`;

export const InfoWrap = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  margin-top: -6%;
  background: ${theme.colors.white};
  padding: 40px 0 120px;
  border-radius: 27px 27px 0 0;
  z-index: 1;
`;

export const Tit = styled.h2`
  ${theme.fonts.Bold00};
  color: ${theme.colors.black};
  padding: 0 7.4667vw;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const TopInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding: 0 7.4667vw;
`;

export const Info = styled.ul`
  padding-right: 15px;
`;

export const List = styled.li`
  position: relative;
  padding-left: 27px;
  color: ${theme.colors.gray02};
  ${theme.fonts.Medium03};
  margin-top: 9px;
  &:first-child {
    margin-top: 0;
  }
  > svg {
    position: absolute;
    top: 1px;
    left: 0;
  }
`;

export const TelLink = styled.a`
  display: inline-block;
  vertical-align: middle;
`;

export const BtnMapWrap = styled.div`
  flex-shrink: 0;
`;

export const BtnMap = styled.button`
  &:first-child {
    margin-right: 12px;
  }
`;

export const WalkTit = styled.h3`
  padding: 55px 7.4667vw 0;
  color: ${theme.colors.gray01};
  ${theme.fonts.SemiBold01};
`;

export const Num = styled.strong`
  color: ${theme.colors.mainColor};
`;

export const ReviewWrap = styled.div`
  margin-top: 26px;
  padding: 0 7.4667vw;
  > div > div {
    width: calc(100% - 50px);
  }
  > div:nth-child(1) > div {
    width: 100%;
  }
  > div:nth-child(2) > div {
    width: calc(100% - 25px);
  }
`;

export const BtnReview = styled.button`
  position: fixed;
  right: 25px;
  bottom: 25px;
  border-radius: 100%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25), 0px 0px 5px rgba(166, 166, 166, 0.03);
  z-index: 99;
`;

export const InfoTit = styled.h3`
  ${theme.fonts.SemiBold01};
  color: ${theme.colors.black};
  padding: 40px 7.4667vw 0;
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
  padding: 17px 0 0 7.4667vw;
  white-space: nowrap;
`;

export const InfoListItem = styled.li`
  display: inline-grid;
  position: relative;
  margin-right: 15px;
  overflow: hidden;
  justify-items: center;
  &:last-child {
    margin-right: 7.4667vw;
  }
`;

export const InfoTxt = styled.p`
  ${theme.fonts.Medium05};
  color: ${theme.colors.gray02};
  padding-top: 10px;
  text-align: center;
`;
