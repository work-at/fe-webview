import React, { memo } from "react";
import * as S from "./ListCard.styled";
import UserImg1 from "@/assets/images/walkchat1.png";
import UserImg2 from "@/assets/images/walkchat2.png";
import UserImg3 from "@/assets/images/walkchat3.png";
import UserImg4 from "@/assets/images/walkchat4.png";

export type ListCardItem = {
  nickname: string;
  job: string;
  year: string;
  act: string[];
};

export type ListCardProps = {
  items: ListCardItem[];
};

const ListCard = ({ items }: ListCardProps) => {
  const ThumbList = [UserImg1, UserImg2, UserImg3, UserImg4];
  return (
    <>
      {items.map((item, index) => (
        <S.ListCardWrap key={index}>
          <S.CardTop>
            <S.UserThumb>
              <img src={ThumbList[index]} alt="" />
            </S.UserThumb>
            <S.UserInfo>
              <S.NickName>{item.nickname}</S.NickName>
              <S.UserEtc>
                <S.InfoList>{item.job}</S.InfoList>
                <S.InfoList>{item.year}년차</S.InfoList>
              </S.UserEtc>
            </S.UserInfo>
          </S.CardTop>
          <S.CardBottom>
            {items[index].act.map((actitem, key) => (
              <S.TagList key={key}>{actitem}</S.TagList>
            ))}
          </S.CardBottom>
        </S.ListCardWrap>
      ))}
    </>
  );
};

export default memo(ListCard);
