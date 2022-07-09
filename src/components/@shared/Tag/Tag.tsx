import React from "react";
import * as S from "./Tag.styled";
import { Icon } from "@/assets/Icon";

export type TagProps = {
  IconType: any;
  Reviews?: number;
  children: React.ReactNode;
};

export const Tag = ({ IconType, children, Reviews }: TagProps) => {
  return (
    <S.Tag>
      <S.TagIcon><Icon icon={IconType} size={25} /></S.TagIcon>
      <S.TagTxt>{children}</S.TagTxt>
      <S.TagNum>{Reviews}</S.TagNum>
    </S.Tag>
  );
};