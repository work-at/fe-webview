import React, { useState, useCallback, useRef, useEffect } from "react";
import Header from "@/components/@shared/Header/Header";
import Icon from "@/assets/Icon";
import * as S from "./WorkChatList.styled";

export type WorkChatItem = {
  newMsg?: boolean;
  nickName: string;
  imageUrl: string;
  job?: string;
  year?: string;
  msg: string;
};

export type WorkChatListProps = {
  items: WorkChatItem[];
};

export const Modal = () => {
  return (
    <S.MenuBox>
      <S.MenuList>대화 나가기</S.MenuList>
      <S.MenuList>차단하기</S.MenuList>
    </S.MenuBox>
  );
};

const WorkChatList = ({ items }: WorkChatListProps) => {
  return (
    <>
      <Header useBack useRefresh bgColor fixed title="본인닉네임" />
      <S.WorkChatListWrap>
        {/* 채팅 기록이 있을 때 */}
        <S.ChatList>
          {items.map((item, index) => (
            <S.ListItem key={index}>
              <S.BtnDetail>
                <S.ThumbWrap>
                  <S.UserThumb>
                    <img src={item.imageUrl} alt="유저 이미지" />
                  </S.UserThumb>
                  {item.newMsg && <S.NewChat>새로운 메세지</S.NewChat>}
                </S.ThumbWrap>
                <S.ChatInfo>
                  <S.UserInfo>
                    <S.UserName newMsg={item.newMsg}>{item.nickName}</S.UserName>
                    <S.UserEtc>
                      <S.EtcList>{item.job}</S.EtcList>
                      <S.EtcList>{item.year}</S.EtcList>
                    </S.UserEtc>
                  </S.UserInfo>
                  <S.ReceiveMsg newMsg={item.newMsg}>{item.msg}</S.ReceiveMsg>
                </S.ChatInfo>
              </S.BtnDetail>
              <S.ModalWrap>
                <S.BtnMore>
                  <Icon icon="BtnMore" />
                </S.BtnMore>
                <Modal />
              </S.ModalWrap>
            </S.ListItem>
          ))}
        </S.ChatList>
        {/* //채팅 기록이 있을 때 */}

        {/* 채팅 기록이 없을 때 */}
        <S.ChatNoData>
          <Icon icon="IconNoData" />
          <S.NoDataTxt>
            아직 채팅 기록이 없어요!
            <br />
            워크챗 신청을 해보세요
          </S.NoDataTxt>
        </S.ChatNoData>
        {/* //채팅 기록이 없을 때 */}
      </S.WorkChatListWrap>
    </>
  );
};

export default WorkChatList;
