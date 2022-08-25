import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import * as S from "./WorkChatPage.styled";
import UserImg from "@/assets/images/walkchat1.png";
import Icon from "@/assets/Icon";
import { useBlockUser, useChatListQuery, useChatRemoveQuery } from "@/domains/chat/chat.api";
import { Room } from "@/domains/chat/chat.type";
import { useCallback, useRef, useState } from "react";
import { useDetectOutsideClick } from "@/hooks";
import ModalContainerPortal from "@/components/@layout/ModalContainer/ModalContainer";
import { useFlow } from "@/stack";

export type DropDownProps = {
  isOpen: boolean;
  roomId: number;
  userId: number;
};

const DropDown = ({ isOpen, roomId, userId }: DropDownProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutateAsync: chatRemoveMutateAsync } = useChatRemoveQuery();
  const { mutateAsync: blockUserMutateAsync } = useBlockUser();

  const { refetch } = useChatListQuery();

  const handleChatRemove = useCallback(async () => {
    try {
      await chatRemoveMutateAsync({ roomId });
      refetch();
    } catch {
      alert("대화 나가기 에러 발생");
    }
  }, [chatRemoveMutateAsync, refetch, roomId]);

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
      <S.BtnDetail onClick={() => push("WorkChatRoomPage", { workerId: item.id })}>
        <S.ThumbWrap>
          <S.UserThumb>
            <img
              src={
                item.otherUser.userProfileUrl
                  ? process.env.SERVER_URL?.replace("/api/v1", "") + item.otherUser.userProfileUrl
                  : UserImg
              }
              alt="유저 이미지"
            />
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
        <DropDown isOpen={isOpen} roomId={item.id} userId={item.otherUser.userId} />
      </S.ModalWrap>
    </S.ListItem>
  );
};

const AppBarRight = () => {
  const { refetch } = useChatListQuery();

  return (
    <button type="button" onClick={() => refetch()}>
      <Icon icon="BtnRefresh" />
    </button>
  );
};

const WorkChatPage = () => {
  const { data } = useChatListQuery();

  return (
    <StackLayout appBar={{ title: "워크챗", appendRight: AppBarRight }} navigationPath="work-chat">
      <S.WorkChatListWrap>
        <S.ChatList>
          {data?.data.rooms.map((item) => (
            <ChatList key={item.id} {...item} />
          ))}
        </S.ChatList>
      </S.WorkChatListWrap>
    </StackLayout>
  );
};

export default WorkChatPage;
