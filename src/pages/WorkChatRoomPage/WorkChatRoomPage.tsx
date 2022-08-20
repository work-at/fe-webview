import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { useActivityParams } from "@stackflow/react";

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Icon from "@/assets/Icon";
import * as S from "./WorkChatRoomPage.styled";
import UserImg from "@/assets/images/walkchat1.png";
import Button from "@/components/@shared/Button/Button";
import {
  requestChat,
  useChatConfirmQuery,
  useChatListQuery,
  useChatMessagesQuery,
  useChatRemoveQuery,
  useChatSendQuery,
  useLastMessageQuery,
} from "@/domains/chat/chat.api";
import { Chats } from "@/domains/chat/chat.action";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import { useUserInfo } from "@/domains/user";
import { usePageVisibility, usePullDownToCallback, usePullUpToCallback } from "@/hooks";
import Spinner from "@/components/@shared/Spinner/Spinner";
import { Room } from "@/domains/chat/chat.type";
import { useFlow } from "@/stack";
import { PATH } from "@/constants";

export type ChatProps = {
  isMe: boolean;
  message: string;
  time?: string;
  date?: string;
};

const Welcome = () => (
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
);

const Chat = ({ isMe, message, time, date }: ChatProps) => {
  return (
    <>
      {date && (
        <S.DateBox>
          <S.DataTxt>{date}</S.DataTxt>
        </S.DateBox>
      )}
      {isMe ? (
        <S.ReceiveMsgBox>
          <S.ReceiveMsgTxt>{message}</S.ReceiveMsgTxt>
          {time && <S.ReceiveMsgTime>{time}</S.ReceiveMsgTime>}
        </S.ReceiveMsgBox>
      ) : (
        <S.SendMsgBox>
          {time && <S.SendMsgTime>{time}</S.SendMsgTime>}
          <S.SendMsgTxt>{message}</S.SendMsgTxt>
        </S.SendMsgBox>
      )}
      {time && <S.Wrap />}
    </>
  );
};

const AppBarRight = ({ callback }: { callback: () => void }) => {
  return (
    <button type="button" onClick={callback}>
      <Icon icon="BtnRefresh" />
    </button>
  );
};

interface ProfileModalProps {
  workerId: string;
}

const ProfileModal = ({ workerId }: ProfileModalProps) => {
  const { pop, push } = useFlow();
  const [isLeave, setIsLeave] = useState(false);
  const { mutateAsync: chatConfirm } = useChatConfirmQuery();
  const { mutateAsync: chatRemove } = useChatRemoveQuery();
  const { refetch } = useChatListQuery();

  if (isLeave) {
    return (
      <S.BlockModalWrap>
        <S.BlockInnerWrap>
          <Icon icon="IconError" />
          <S.BlockMsgTxt>
            대화 내용이 삭제됩니다.
            <br />
            괜찮으신가요?
          </S.BlockMsgTxt>
          <S.BtnWrap>
            <Button size="md" bgColor="gray" round onClick={() => setIsLeave(false)}>
              아니요
            </Button>
            <Button
              size="md"
              bgColor="black"
              round
              onClick={async () => {
                try {
                  await chatRemove({ roomId: Number(workerId) });
                  await refetch();
                  pop();
                } catch {
                  alert();
                }
              }}
            >
              예
            </Button>
          </S.BtnWrap>
        </S.BlockInnerWrap>
      </S.BlockModalWrap>
    );
  }

  return (
    <S.ProModalWrap>
      <S.ProInnerWrap>
        <S.ProThumb>
          <img src={UserImg} alt="유저 이미지" />
        </S.ProThumb>
        <S.ProGoBtn>
          <S.ProGoTxt onClick={() => push(PATH.WORKER.stack, { workerId })}>프로필 보러가기</S.ProGoTxt>
          <Icon icon="BtnGo" />
        </S.ProGoBtn>
        <S.ProMsgTxt>
          &lsquo;개발열심히해요&rsquo; 님이 워크챗을 보냈습니다.
          <br />
          대화를 이어가시겠습니까?
        </S.ProMsgTxt>
        <S.BtnWrap>
          <Button size="md" bgColor="gray" round onClick={() => setIsLeave(true)}>
            나가기
          </Button>
          <Button
            size="md"
            bgColor="black"
            round
            onClick={async () => {
              try {
                await chatConfirm({ roomId: Number(workerId) });
                refetch();
              } catch {
                alert();
              }
            }}
          >
            시작하기
          </Button>
        </S.BtnWrap>
      </S.ProInnerWrap>
    </S.ProModalWrap>
  );
};

const WorkChatRoomPage = () => {
  const { workerId } = useActivityParams<{ workerId: string }>();
  const { data, refetch } = useChatListQuery();
  const chatInfo = useMemo<Partial<Room>>(
    () => data?.data.rooms.filter((item) => item.id === Number(workerId))[0] ?? {},
    [data, workerId]
  );
  const [chatMessages, setChatMessages] = useState<Chats>([]);
  const { data: chatMessagesData } = useChatMessagesQuery({ roomId: Number(workerId), sortType: "BEFORE" });
  const { data: userInfo } = useUserInfo();
  const { mutateAsync: chatSend } = useChatSendQuery();
  const { mutateAsync: postLastMessage } = useLastMessageQuery();

  const [message, setMessage] = useState("");

  const handleSendChat = async () => {
    try {
      await chatSend({ message, roomId: Number(workerId) });
      setMessage("");
      await handlePullUpCallback();
      handleScrollToEnd();
    } catch {
      alert();
    }
  };

  const chatAreaScrollRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const chatAreaRef = useRef<HTMLDivElement>(null);

  const handlePullDownCallback = useCallback(async () => {
    try {
      const { data } = await requestChat({
        roomId: Number(workerId),
        messageId: chatMessages[0].id,
        sortType: "BEFORE",
      });

      if (data.messages.length !== 0) {
        setChatMessages((prev) => [...data.messages, ...prev]);
      }
    } catch {
      alert();
    }
  }, [chatMessages, workerId]);

  const handlePullUpCallback = useCallback(async () => {
    try {
      const { data } = await requestChat({
        roomId: Number(workerId),
        messageId: chatMessages[chatMessages.length - 1].id,
        sortType: "AFTER",
      });

      if (data.messages.length !== 0) {
        await postLastMessage({ lastMessageId: data.messages[data.messages.length - 1].id, roomId: Number(workerId) });
        setChatMessages((prev) => [...prev, ...data.messages]);
      }
    } catch {
      alert();
    }
  }, [chatMessages, postLastMessage, workerId]);

  const handleVisibilityChange = useCallback(
    async (isVisible: boolean) => {
      if (isVisible) {
        await handlePullUpCallback();
        return;
      }
      await postLastMessage({ lastMessageId: chatMessages[chatMessages.length - 1].id, roomId: Number(workerId) });
    },
    [chatMessages, handlePullUpCallback, postLastMessage, workerId]
  );

  usePageVisibility({ callback: handleVisibilityChange });

  useEffect(() => {
    const unMountAction = async () => {
      if (chatMessages.length !== 0) {
        await postLastMessage({ lastMessageId: chatMessages[chatMessages.length - 1].id, roomId: Number(workerId) });
        refetch();
      }
    };
    return () => unMountAction() as any;
  }, [chatMessages, postLastMessage, refetch, workerId]);

  const { headRef, headHeight } = usePullDownToCallback({ onCallback: handlePullDownCallback, chatAreaRef });
  const { tailRef, tailHeight } = usePullUpToCallback({ onCallback: handlePullUpCallback, chatAreaRef });

  const handleScrollToEnd = useCallback(() => {
    setTimeout(() => {
      if (chatAreaScrollRef.current) {
        chatAreaScrollRef.current.scrollTo({
          top: chatAreaScrollRef.current.scrollHeight - chatAreaScrollRef.current.clientHeight,
        });
      }
    }, 10);
  }, [chatAreaScrollRef]);

  useEffect(() => {
    setChatMessages(chatMessagesData?.data.messages ?? []);
  }, [chatMessagesData, handleScrollToEnd]);

  useEffect(() => {
    handleScrollToEnd();
  }, [handleScrollToEnd]);

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target?.value);

    if (chatAreaRef?.current && textAreaRef?.current) {
      textAreaRef.current.style.height = "0px";
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
      chatAreaRef.current.style.height = `calc(100% - ${textAreaRef.current.style.height} - 59px)`;
      handleScrollToEnd();
    }
  };

  if (!workerId) {
    // TODO : 에러 메세지 피드백 후 리디렉션
    throw new Error("워크챗 대상이 지정되지 않았습니다.");
  }

  return (
    <StackLayout
      appBar={{
        title: chatInfo?.otherUser?.userNickname ?? "",
        appendRight: () => AppBarRight({ callback: handlePullUpCallback }),
        isTitleCenter: true,
      }}
    >
      <S.WorkChatWrap ref={chatAreaRef}>
        <S.PullArea ref={headRef}>
          <S.PullAreaContent height={headHeight}>
            <Spinner />
          </S.PullAreaContent>
        </S.PullArea>
        <S.ChatBoxWrap ref={chatAreaScrollRef}>
          <S.WorkChat>
            {chatMessages.length === 0 && <Welcome />}
            {chatMessages.map((currentChat, index) => {
              let time;
              let date;

              if (index === 0) date = dayjs(currentChat.createdDate).format("YYYY년 M월 DD일");
              if (index > 0) {
                const prevChat = chatMessages[index - 1];
                const prevDate = dayjs(prevChat.createdDate).format("YYYY년 M월 DD일");
                const currentDate = dayjs(currentChat.createdDate).format("YYYY년 M월 DD일");

                if (prevDate !== currentDate) {
                  date = currentDate;
                }
              }

              if (index === chatMessages.length - 1) time = dayjs(currentChat.createdDate).format("a HH:MM");
              if (index < chatMessages.length - 1) {
                const nextChat = chatMessages[index + 1];
                if (currentChat.writerId !== nextChat.writerId) {
                  time = dayjs(currentChat.createdDate).format("a HH:MM");
                }
              }

              return (
                <Chat
                  key={currentChat.createdDate}
                  isMe={currentChat.writerId === userInfo?.id}
                  message={currentChat.message}
                  date={date}
                  time={time}
                />
              );
            })}
            {chatMessages.length > 0 && (
              <S.PullArea ref={tailRef}>
                <S.PullAreaContent height={tailHeight}>
                  <Spinner />
                </S.PullAreaContent>
              </S.PullArea>
            )}
            {(chatInfo.blockedByOtherUser || chatInfo.deletedByOtherUser) && (
              <S.LeaveMsg>
                <S.LeaveTxt>대화 상대방이 채팅방을 나갔어요.</S.LeaveTxt>
              </S.LeaveMsg>
            )}
          </S.WorkChat>
        </S.ChatBoxWrap>
        {chatMessages.length === 0 && (
          // TODO: 워케이셔너 페이지로 이동시키도록 처리
          <S.MatchMsgWrap>
            <Icon icon="IconWalkChat" />
            <S.Matchtxt>내 주변 워케이셔너와 만나보세요!</S.Matchtxt>
          </S.MatchMsgWrap>
        )}
      </S.WorkChatWrap>
      <S.BottomFixedWrap>
        <S.TxtInputWrap>
          <S.Txtarea
            placeholder="메세지를 입력하세요."
            onChange={handleChangeMessage}
            ref={textAreaRef}
            rows={1}
            value={message}
          />
          <S.BtnSend onClick={handleSendChat}>
            <Icon icon={"BtnSendMsg"} size={26} />
          </S.BtnSend>
        </S.TxtInputWrap>
      </S.BottomFixedWrap>
      {!chatInfo.start && <ProfileModal workerId={workerId} />}
    </StackLayout>
  );
};

export default WorkChatRoomPage;
