import styled from "styled-components";
import { theme } from "@/assets/styles/theme";
import { Z_INDEX } from "@/constants/zIndex";

export const WorkChatListWrap = styled.div`
  position: relative;
  height: calc(100vh - 97px);
  padding-top: 97px;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translateZ(0);
  -webkit-overflow-scrolling: touch;
`;

export const ChatList = styled.ul``;

export const ListItem = styled.li`
  position: relative;
  padding: 18px 0 18px 7.4667vw;
  border-top: 1px solid ${theme.colors.gray08};
  @media screen and (max-width: 374px) {
    padding-left: 10px;
  }
  &:first-child {
    border: none;
  }
`;

export const BtnDetail = styled.button`
  display: flex;
  align-items: center;
  width: calc(100% - 50px);
`;

export const ThumbWrap = styled.div`
  position: relative;
`;

export const UserThumb = styled.div`
  width: 16.53vw;
  height: 16.53vw;
  max-width: 62px;
  max-height: 62px;
  overflow: hidden;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  > img {
    height: 100%;
    display: block;
  }
`;

export const NewChat = styled.span`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 16px;
  height: 16px;
  border: 2px solid ${theme.colors.white};
  background: ${theme.colors.error};
  border-radius: 100%;
  text-indent: -9999px;
  z-index: ${Z_INDEX.LOW};
`;

export const ChatInfo = styled.div`
  margin-left: 3.73vw;
  width: calc(100% - 20.2667vw);
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`;

export const UserName = styled.p<{ newMsg?: boolean }>`
  ${({ newMsg }) => (newMsg ? theme.fonts.Bold05 : theme.fonts.Medium03)};
  color: ${({ newMsg }) => (newMsg ? theme.colors.black : theme.colors.gray01)};
`;

export const UserEtc = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

export const EtcList = styled.li`
  ${theme.fonts.Medium06};
  color: ${theme.colors.gray04};
  position: relative;
  padding: 0 5px;
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 1px;
    margin-top: -4px;
    height: 9px;
    background: ${theme.colors.gray05};
  }
  &:first-child {
    padding-left: 0;
    &:before {
      display: none;
    }
  }
`;

export const ReceiveMsg = styled.p<{ newMsg?: boolean }>`
  ${theme.fonts.Medium03};
  color: ${({ newMsg }) => (newMsg ? theme.colors.black : theme.colors.gray04)};
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: left;
`;

export const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  width: 24px;
  height: 24px;
  margin-top: -12px;
  right: 18px;
  z-index: ${Z_INDEX.ROOT};
`;

export const BtnMore = styled.button``;

export const MenuBox = styled.div`
  position: absolute;
  top: 24px;
  right: 0;
  padding: 3px 0;
  background: ${theme.colors.white};
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  min-width: 164px;
  z-index: ${Z_INDEX.MIDDLE};
`;

export const MenuList = styled.button`
  ${theme.fonts.Medium02};
  color: ${theme.colors.black};
  display: block;
  width: 100%;
  padding: 15px;
  text-align: left;
`;

export const ChatNoData = styled.div`
  padding: 225px 0 100px;
  text-align: center;
`;

export const NoDataTxt = styled.p`
  ${theme.fonts.Regular03};
  color: ${theme.colors.black};
  padding-top: 13px;
`;
