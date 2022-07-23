import React from "react";
import * as S from "./Tag.styled";
import Icon from "@/assets/Icon";

export type TagProps = {
  iconType: any;
  reviews?: number;
  children: React.ReactNode;
};

const Tag = ({ iconType, reviews = 0, children }: TagProps) => {
  return (
    <S.Tag>
      <S.TagInner restWidth={((window.innerWidth - 220) / 100) * reviews}>
        <S.TagIcon>
          <Icon icon={iconType} />
        </S.TagIcon>
        <S.TagTxt>{children}</S.TagTxt>
      </S.TagInner>
    </S.Tag>
  );
};

export default Tag;
