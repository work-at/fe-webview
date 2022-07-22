import styled from "styled-components";
import { theme } from "@/assets/styles/theme";

export const WorkerDetailWrap = styled.div`
  position: relative;
`;

export const TopInfo = styled.div`
  padding: 8px 0 35px;
  border-bottom: 3px solid ${theme.colors.gray09};
`;

export const UserThumb = styled.div`
  width: 115px;
  height: 115px;
  margin: 0 auto 23px;
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    display: flex;
    width: 100%;
  }
`;

export const UserName = styled.div`
  ${theme.fonts.Bold03};
  color: ${theme.colors.gray01};
  text-align: center;
`;

export const EtcInfo = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 19px;
`;

export const EtcList = styled.li`
  position: relative;
  ${theme.fonts.Medium02};
  color: ${theme.colors.black};
  padding: 0 12px;
  &:nth-child(2):before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 1px;
    height: 13px;
    margin-top: -7.5px;
    background: ${theme.colors.gray05};
  }
`;

export const EtcChatList = styled.li`
  ${theme.fonts.Medium05};
  color: ${theme.colors.gray02};
  background: ${theme.colors.gray10};
  display: flex;
  align-items: center;
  padding: 4px 13px 3px;
  border-radius: 17px;
  > strong {
    ${theme.fonts.Medium03};
    color: ${theme.colors.green};
    padding-left: 8px;
  }
`;

export const DetailInfo = styled.div`
  padding: 35px 28px 52px;
`;

export const AboutMe = styled.p`
  ${theme.fonts.Regular03};
  color: ${theme.colors.black};
  padding-bottom: 38px;
`;

export const HopeTit = styled.h2`
  ${theme.fonts.Bold04};
  color: ${theme.colors.black};
  padding-bottom: 16px;
`;

export const HopeTag = styled.div``;
