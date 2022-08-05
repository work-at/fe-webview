import React, { useState, useCallback, useRef, useEffect } from "react";
import Header from "@/components/@shared/Header/Header";
import Icon from "@/assets/Icon";
import * as S from "./WorkChatList.styled";

export type WorkChatItem = {
  new?: boolean;
  nickName: string;
  imageUrl: string;
  job?: string;
  year?: string;
  msg: string;
};

export type WorkChatListProps = {
  items: WorkChatItem[];
  show: boolean;
};

export const Modal = ({ show }: WorkChatListProps) => {
  if (!show) {
    return null;
  }
  return (
    <S.MenuBox>
      <S.MenuList>대화 나가기</S.MenuList>
      <S.MenuList>차단하기</S.MenuList>
    </S.MenuBox>
  );
};

const WorkChatList = ({ items }: WorkChatListProps) => {
  const [show, setShow] = useState(false);
  const popRef = useRef<HTMLDivElement>(null);

  const onClickOutside = useCallback(
    ({ target }) => {
      if (popRef.current && !popRef.current.contains(target)) {
        setShow(false);
      }
    },
    [setShow]
  );

  useEffect(() => {
    document.addEventListener("click", onClickOutside);
    return () => {
      document.removeEventListener("click", onClickOutside);
    };
  }, []);

  const onClickToggleModal = useCallback(() => {
    setShow((prev) => !prev);
  }, [setShow]);

  return (
    <>
      <Header useBack useRefresh bgColor fixed useLink title="이름여덟글자제한" />
      <S.WorkChatListWrap>
        <S.ChatList>
          {items.map((item, index) => (
            <S.ListItem key={index}>
              <S.BtnDetail>
                <S.ThumbWrap>
                  <S.UserThumb>
                    <img src={item.imageUrl} alt="유저 이미지" />
                  </S.UserThumb>
                  {item.new && <S.NewChat>새로운 메세지</S.NewChat>}
                </S.ThumbWrap>
                <S.ChatInfo>
                  <S.UserInfo>
                    <S.UserName>{item.nickName}</S.UserName>
                    <S.UserEtc>
                      <S.EtcList>{item.job}</S.EtcList>
                      <S.EtcList>{item.year}</S.EtcList>
                    </S.UserEtc>
                  </S.UserInfo>
                  <S.ReceiveMsg>{item.msg}</S.ReceiveMsg>
                </S.ChatInfo>
              </S.BtnDetail>
              <S.ModalWrap ref={popRef}>
                <S.BtnMore onClick={onClickToggleModal}>
                  <Icon icon="BtnMore" />
                </S.BtnMore>
                <Modal show={show} />
              </S.ModalWrap>
            </S.ListItem>
          ))}
        </S.ChatList>
      </S.WorkChatListWrap>
    </>
  );
};

export default WorkChatList;
