import React from "react";
import Icon from "@/assets/Icon";
import * as S from "./Header.styled";

export type HeaderProps = {
  bgColor?: boolean;
  useBack?: boolean;
  title?: string;
};

const Header = ({ bgColor, useBack, title }: HeaderProps) => {
  return (
    <S.Header bgColor={bgColor}>
      <S.HeaderInner useBack={useBack}>
        {useBack && (
          <S.BtnBack bgColor={bgColor}>
            <Icon icon="BtnBack" size={24} />
          </S.BtnBack>
        )}
        {title && <S.Tit>{title}</S.Tit>}
      </S.HeaderInner>
    </S.Header>
  );
};

export default Header;
