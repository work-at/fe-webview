import React from "react";
import * as S from "./Tag.styled";
import Icon from "@/assets/Icon";

export type TagProps = {
  iconType: any;
  reviews?: number;
  walkChat?: boolean;
  children: React.ReactNode;
};

const Tag = ({ iconType, reviews, walkChat, children }: TagProps) => {
  return (
    <S.Tag>
      <S.TagInnder walkChat={walkChat}>
        <S.TagIcon>
          <Icon icon={iconType} />
        </S.TagIcon>
        <S.TagTxt>{children}</S.TagTxt>
        <S.TagNum>{reviews}</S.TagNum>
      </S.TagInnder>
    </S.Tag>
  );
};

export default Tag;
