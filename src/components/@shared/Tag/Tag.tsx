import React from "react";
import * as S from "./Tag.styled";
import Icon from "@/assets/Icon";

export type TagProps = {
  iconType: any;
  reviews?: number;
  workChat?: boolean;
  children: React.ReactNode;
};

const Tag = ({ iconType, reviews = 0, workChat = false, children }: TagProps) => {
  return (
    <S.Tag>
      <S.TagInner workChat={workChat} reviews={((window.innerWidth - 200) / 100) * reviews}>
        <S.TagIcon>
          <Icon icon={iconType} />
        </S.TagIcon>
        <S.TagTxt>{children}</S.TagTxt>
      </S.TagInner>
    </S.Tag>
  );
};

export default Tag;
