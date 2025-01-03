import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/@shared/Header/Header";
import Icon from "@/assets/Icon";
import * as S from "./WorkChat.styled";
import UserImg from "@/assets/images/walkchat1.png";
import Button from "@/components/@shared/Button/Button";

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
      <Header useBack useRefresh bgColor fixed useLink title="이름여덟글자제한" />
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

            {/* 대화 나갔을 경우/차단했을 경우 텍스트 */}
            <S.LeaveMsg>
              <S.LeaveTxt>대화 상대방이 채팅방을 나갔어요.</S.LeaveTxt>
            </S.LeaveMsg>
            {/* //대화 나갔을 경우/차단했을 경우 텍스트 */}
          </S.WorkChat>
        </S.ChatBoxWrap>

        {/* 배너 */}
        <S.MatchMsgWrap>
          <Icon icon="IconWalkChat" />
          <S.Matchtxt>내 주변 워케이셔너와 만나보세요!</S.Matchtxt>
        </S.MatchMsgWrap>
        {/* //배너 */}
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

      {/* 프로필 */}
      <S.ProModalWrap>
        <S.ProInnerWrap>
          <S.ProThumb>
            <img src={UserImg} alt="유저 이미지" />
          </S.ProThumb>
          <S.ProGoBtn>
            <S.ProGoTxt>프로필 보러가기</S.ProGoTxt>
            <Icon icon="BtnGo" />
          </S.ProGoBtn>
          <S.ProMsgTxt>
            &lsquo;개발열심히해요&rsquo; 님이 워크챗을 보냈습니다.
            <br />
            대화를 이어가시겠습니까?
          </S.ProMsgTxt>
          <S.BtnWrap>
            <Button size="md" bgColor="gray" round>
              나가기
            </Button>
            <Button size="md" bgColor="black" round>
              시작하기
            </Button>
          </S.BtnWrap>
        </S.ProInnerWrap>
      </S.ProModalWrap>
      {/* //프로필 */}

      {/* 차단하기 */}
      <S.BlockModalWrap>
        <S.BlockInnerWrap>
          <Icon icon="IconError" />
          <S.BlockMsgTxt>
            대화 내용이 삭제됩니다.
            <br />
            괜찮으신가요?
          </S.BlockMsgTxt>
          <S.BtnWrap>
            <Button size="md" bgColor="gray" round>
              아니요
            </Button>
            <Button size="md" bgColor="black" round>
              예
            </Button>
          </S.BtnWrap>
        </S.BlockInnerWrap>
      </S.BlockModalWrap>
      {/* //차단하기 */}
    </>
  );
};

export default WorkChat;
