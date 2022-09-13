import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import * as S from "./WorkChatPage.styled";
import Icon from "@/assets/Icon";
import { useBlockUser, useChatListQuery, useChatRemoveQuery } from "@/domains/chat/chat.api";
import { Room } from "@/domains/chat/chat.type";
import { useCallback, useRef, useState } from "react";
import { useDetectOutsideClick } from "@/hooks";
import ModalContainerPortal from "@/components/@layout/ModalContainer/ModalContainer";
import { useFlow } from "@/stack";
import { PATH } from "@/constants";
import Lottie from "@/components/@shared/Lottie/Lottie.component";

export type DropDownProps = {
  isOpen: boolean;
  roomId: number;
  userId: number;
  lastMessageId: number;
};

const DropDown = ({ isOpen, roomId, userId, lastMessageId }: DropDownProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutateAsync: chatRemoveMutateAsync } = useChatRemoveQuery();
  const { mutateAsync: blockUserMutateAsync } = useBlockUser();

  const { refetch } = useChatListQuery();

  const handleChatRemove = useCallback(async () => {
    try {
      await chatRemoveMutateAsync({ roomId, lastMessageId });
      refetch();
    } catch {
      alert("대화 나가기 에러 발생");
    }
  }, [chatRemoveMutateAsync, refetch, roomId, lastMessageId]);

  const handleBlockUser = useCallback(async () => {
    try {
      await blockUserMutateAsync({ blockUserId: userId });
      refetch();
    } catch {
      alert("차단하기 에러 발생");
    }
  }, [blockUserMutateAsync, refetch, userId]);

  return (
    <>
      <ModalContainerPortal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleBlockUser}
        confirmText="차단하기"
      >
        차단한 사용자와는
        <br />
        다시 대화가 불가해요.
        <br />
        그래도 차단하시겠어요?
      </ModalContainerPortal>
      <S.MenuBox isOpen={isOpen}>
        <S.MenuList isOpen={isOpen} onClick={handleChatRemove}>
          대화 나가기
        </S.MenuList>
        <S.MenuList isOpen={isOpen} onClick={() => setIsModalOpen(true)}>
          차단하기
        </S.MenuList>
      </S.MenuBox>
    </>
  );
};

const ChatList = (item: Room) => {
  const { push } = useFlow();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useDetectOutsideClick(ref, () => setIsOpen(false));

  return (
    <S.ListItem>
      <S.BtnDetail onClick={() => push(PATH.WORK_CHAT.ROOM.stack, { roomId: item.id })}>
        <S.ThumbWrap>
          <S.UserThumb>
            <img src={item.otherUser.userProfileUrl} alt="유저 이미지" />
          </S.UserThumb>
          {!item.allRead && <S.NewChat />}
        </S.ThumbWrap>
        <S.ChatInfo>
          <S.UserInfo>
            <S.UserName newMsg={!item.allRead}>{item.otherUser.userNickname}</S.UserName>
            <S.UserEtc>
              <S.EtcList>{item.otherUser.position}</S.EtcList>
              <S.EtcList>{item.otherUser.workingYear}</S.EtcList>
            </S.UserEtc>
          </S.UserInfo>
          <S.ReceiveMsg newMsg={!item.allRead}>{item.lastMessage ?? "채팅방이 생성되었습니다."}</S.ReceiveMsg>
        </S.ChatInfo>
      </S.BtnDetail>
      <S.ModalWrap>
        <S.BtnMore onClick={() => setIsOpen((prev) => !prev)} ref={ref}>
          <Icon icon="BtnMore" />
        </S.BtnMore>
        <DropDown isOpen={isOpen} roomId={item.id} userId={item.otherUser.userId} lastMessageId={item.lastMessageId} />
      </S.ModalWrap>
    </S.ListItem>
  );
};

const AppBarRight = () => {
  const { data } = useChatListQuery();

  const { refetch } = useChatListQuery();
  const [trigger, setTrigger] = useState(false);

  const handleClickRefresh = useCallback(() => {
    refetch();

    setTrigger(true);
    setTimeout(() => setTrigger(false), 1000);
  }, [refetch]);

  if (data?.data.rooms.length === 0) {
    return null;
  }

  return (
    <S.ButtonRotate type="button" onClick={handleClickRefresh} trigger={trigger}>
      <Icon icon="BtnRefresh" />
    </S.ButtonRotate>
  );
};

const WorkChatPage = () => {
  const { data, isLoading } = useChatListQuery();

  if (isLoading) {
    return (
      <StackLayout appBar={{ title: "워크챗", appendRight: AppBarRight }} navigationPath="work-chat">
        <Lottie source={require("@/assets/loading.json")} speed={2} />
      </StackLayout>
    );
  }

  return (
    <StackLayout appBar={{ title: "워크챗", appendRight: AppBarRight }} navigationPath="work-chat">
      <S.WorkChatListWrap>
        {data?.data.rooms.length === 0 || !data?.data ? (
          <S.ChatNoDataWrap>
            <S.ChatNoData>
              <Icon icon="IconNoData" />
              <S.NoDataTxt>
                아직 채팅 기록이 없어요!
                <br />
                워크챗 신청을 해보세요
              </S.NoDataTxt>
            </S.ChatNoData>
          </S.ChatNoDataWrap>
        ) : (
          <S.ChatList>
            {data?.data.rooms.map((item) => (
              <ChatList key={item.id} {...item} />
            ))}
          </S.ChatList>
        )}
      </S.WorkChatListWrap>
    </StackLayout>
  );
};

export default WorkChatPage;
