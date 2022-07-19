import React from "react";
import * as S from "./Tag.styled";
import Icon from "@/assets/Icon";

export type TagProps = {
  iconType: any;
  Reviews?: number;
  children: React.ReactNode;
};

const Tag = ({ iconType, children, Reviews }: TagProps) => {
  return (
    <S.Tag>
      <S.TagIcon>
        <Icon icon={iconType} size={30} />
      </S.TagIcon>
      <S.TagTxt>{children}</S.TagTxt>
      <S.TagNum>{Reviews}</S.TagNum>
    </S.Tag>
  );
};

export default Tag;
