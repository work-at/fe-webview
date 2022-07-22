import styled from "styled-components";
import { theme } from "@/assets/styles/theme";

export const WorkChatWrap = styled.div`
  position: relative;
  overflow-y: hidden;
  height: calc(100vh - 97px);
  transform: translate3d(0, 0, 0);
  -webkit-transform: translateZ(0);
  -webkit-overflow-scrolling: touch;
`;

export const ChatBoxWrap = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden auto;
  padding: 0 7.4667vw;
  background-color: ${theme.colors.white};
`;

export const WorkChat = styled.div`
  padding: 97px 0 20px;
`;

export const DateBox = styled.div`
  padding: 24px 0 5px;
  text-align: center;
`;

export const DataTxt = styled.span`
  ${theme.fonts.Medium06};
  color: ${theme.colors.gray03};
  display: inline-block;
  vertical-align: middle;
`;

export const ReceivedMsgWrap = styled.div`
  margin-top: 19px;
`;

export const ReceiveMsgBox = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

export const ReceiveMsgTxt = styled.div`
  ${theme.fonts.Regular04};
  color: ${theme.colors.black};
  background: ${theme.colors.gray08};
  position: relative;
  clear: both;
  padding: 11px 14px 10px 15px;
  margin-top: 3px;
  float: left;
  max-width: 73%;
  white-space: pre-wrap;
  border-radius: 27px;
  z-index: 2;
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0px;
    height: 0px;
    border-right: 10px solid transparent;
    border-left: 16px solid transparent;
    border-bottom: 10px solid ${theme.colors.gray08};
    z-index: -1;
  }
`;

export const ReceiveMsgTime = styled.p`
  ${theme.fonts.Medium06};
  color: ${theme.colors.gray03};
`;

export const SendMsgWrap = styled(ReceivedMsgWrap)``;

export const SendMsgBox = styled(ReceiveMsgBox)`
  justify-content: flex-end;
`;

export const SendMsgTxt = styled(ReceiveMsgTxt)`
  float: right;
  background: ${theme.colors.mainColor};
  color: ${theme.colors.white};
  &:after {
    left: inherit;
    right: 0;
    border-bottom: 10px solid ${theme.colors.mainColor};
  }
`;

export const SendMsgTime = styled(ReceiveMsgTime)``;

export const BottomFixedWrap = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 26px 7.4667vw 33px;
  background-color: ${theme.colors.white};
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  -webkit-transform: translateZ(0);
  -webkit-overflow-scrolling: touch;
  z-index: 99;
`;

export const TxtInputWrap = styled.div`
  position: relative;
`;

export const TxtInput = styled.textarea``;

export const Txtarea = styled.textarea`
  ${theme.fonts.Medium03};
  color: ${theme.colors.black};
  position: relative;
  display: block;
  width: 100%;
  height: 36px;
  padding: 8px 42px 8px 15px;
  border-radius: 20px;
  border: 0px;
  outline: 0px;
  resize: none;
  word-break: normal;
  min-height: 36px;
  max-height: 250px;
  overflow: hidden;
  background-color: ${theme.colors.gray09};
`;

export const BtnSend = styled.button`
  position: absolute;
  bottom: 5px;
  right: 5px;
  border-radius: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const EmptyMsgWrap = styled.div``;

export const EmptyInfoBox = styled.div`
  background: ${theme.colors.gray08};
  border-radius: 27px;
  padding: 18px 27px 23px;
  margin-top: 23px;
`;

export const EmptyTit = styled.p`
  ${theme.fonts.Medium03};
  color: ${theme.colors.gray05};
  text-align: center;
`;

export const EmptyInfoList = styled.ul`
  padding-top: 13px;
`;

export const InfoList = styled.li`
  position: relative;
  ${theme.fonts.Bold06};
  color: ${theme.colors.gray05};
  padding-left: 12px;
  margin-top: 4px;
  &:before {
    content: "";
    position: absolute;
    top: 7px;
    left: 0;
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background: ${theme.colors.gray05};
  }
  &:first-child {
    margin-top: 0;
  }
`;
