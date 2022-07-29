import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/@shared/Header/Header";
import Icon from "@/assets/Icon";
import * as S from "./WorkChat.styled";

export const useAutosizeTextArea = (textAreaRef: HTMLTextAreaElement | null, value: string) => {
  useEffect(() => {
    if (textAreaRef) {
      textAreaRef.style.height = "0px";
      const scrollHeight = textAreaRef.scrollHeight;
      textAreaRef.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);
};

const TextareaComponent = () => {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useAutosizeTextArea(textAreaRef.current, value);

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = evt.target?.value;

    setValue(val);
  };

  return (
    <S.Txtarea placeholder="메세지를 입력하세요." onChange={handleChange} ref={textAreaRef} rows={1} value={value} />
  );
};

const WorkChat = () => {
  return (
    <>
      <Header useBack useRefresh bgColor fixed title="이름여덟글자제한" />
      <S.WorkChatWrap>
        <S.ChatBoxWrap>
          <S.WorkChat>
            {/* 메시지 없을 때 케이스 */}
            <S.EmptyMsgWrap>
              <S.EmptyInfoBox>
                <S.EmptyTit>워케이션 관련 이야기를 나눠보세요!</S.EmptyTit>
                <S.EmptyInfoList>
                  <S.InfoList>3년차 UX 디자이너는 어떤 역량을 쌓으면 좋을까요?</S.InfoList>
                  <S.InfoList>대학원을 추천하시나요?</S.InfoList>
                  <S.InfoList>IT 개발자를 위한 연봉협상 꿀팁이 있나요?</S.InfoList>
                  <S.InfoList>워케이션 기간이 언제까지신가요?</S.InfoList>
                </S.EmptyInfoList>
              </S.EmptyInfoBox>
              <S.EtcInfoList>
                <S.EtcList>운영정책을 위반할 경우 이용에 제한이 있을 수 있습니다.</S.EtcList>
                <S.EtcList>회사 보안에 위반된 질문은 금지합니다.</S.EtcList>
                <S.EtcList>개인정보 등 무례한 질문은 삼가해주세요.</S.EtcList>
              </S.EtcInfoList>
            </S.EmptyMsgWrap>
            {/* 메시지 없을 때 케이스 */}

            {/* 날짜 */}
            <S.DateBox>
              <S.DataTxt>2022년 8월 27일</S.DataTxt>
            </S.DateBox>
            {/* //날짜 */}

            {/* 받은 메시지 */}
            <S.ReceivedMsgWrap>
              {/* loop */}
              <S.ReceiveMsgBox>
                <S.ReceiveMsgTxt>
                  안녕하세요. 저는 커리어 다지기에 관심이 있고 커피챗에서 내용 배껴왔어요.
                </S.ReceiveMsgTxt>
              </S.ReceiveMsgBox>
              {/* //loop */}
              <S.ReceiveMsgBox>
                <S.ReceiveMsgTxt>보낸다 받아랏</S.ReceiveMsgTxt>
                <S.ReceiveMsgTime>오전 11:41</S.ReceiveMsgTime>
              </S.ReceiveMsgBox>
            </S.ReceivedMsgWrap>
            {/* //받은 메시지 */}

            {/* 보낸 메시지 */}
            <S.SendMsgWrap>
              {/* loop */}
              <S.SendMsgBox>
                <S.SendMsgTxt>
                  내용 커피챗에서 베껴왔어요. 인생-커리어 다지기에 관심이 많고, 어떻게 원하는 일을 찾고, 만들고, 즐길 수
                  있을지 언제나 고민하고 있습니다. 일을 행복하게 오래 즐길 수 있는 방법을 고민하고 있는 워케이셔너와의
                  만남을 기대합니다.
                </S.SendMsgTxt>
              </S.SendMsgBox>
              {/* //loop */}
              <S.SendMsgBox>
                <S.SendMsgTxt>받았다 너도 받아랏</S.SendMsgTxt>
              </S.SendMsgBox>
              <S.SendMsgBox>
                <S.SendMsgTime>오전 11:42</S.SendMsgTime>
                <S.SendMsgTxt>응</S.SendMsgTxt>
              </S.SendMsgBox>
            </S.SendMsgWrap>
            {/* //보낸 메시지 */}

            <S.DateBox>
              <S.DataTxt>2022년 9월 1일</S.DataTxt>
            </S.DateBox>

            <S.SendMsgWrap>
              <S.SendMsgBox>
                <S.SendMsgTime>오전 1:42</S.SendMsgTime>
                <S.SendMsgTxt>네 좋아요~~</S.SendMsgTxt>
              </S.SendMsgBox>
            </S.SendMsgWrap>
            <S.ReceiveMsgBox>
              <S.ReceiveMsgTxt>
                안녕하세요. 저는 커리어 다지기에 관심이 있고 커피챗에서 내용 배껴왔어요.
              </S.ReceiveMsgTxt>
            </S.ReceiveMsgBox>
          </S.WorkChat>
        </S.ChatBoxWrap>
      </S.WorkChatWrap>

      {/* 텍스트 입력창 */}
      <S.BottomFixedWrap>
        <S.TxtInputWrap>
          <TextareaComponent />
          <S.BtnSend>
            <Icon icon={"BtnSendMsg"} size={26} />
          </S.BtnSend>
        </S.TxtInputWrap>
      </S.BottomFixedWrap>
      {/* //텍스트 입력창 */}
    </>
  );
};

export default WorkChat;
