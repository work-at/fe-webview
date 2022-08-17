import React from "react";
import Icon from "@/assets/Icon";
import * as S from "./Header.styled";
import { useFlow } from "@/stack";

export type HeaderProps = {
  main?: boolean;
  bgColor?: boolean;
  useBack?: boolean;
  useRefresh?: boolean;
  title?: string;
  fixed?: boolean;
  useLink?: boolean;
};

const Header = ({ main, bgColor, useBack, title, useRefresh, fixed, useLink }: HeaderProps) => {
  const { pop } = useFlow();
  return (
    <S.Header bgColor={bgColor} fixed={fixed} main={main}>
      {main && (
        <S.HeaderInner>
          <S.Logo>
            <Icon icon="Logo" />
          </S.Logo>
          <S.BtnSearch>
            <Icon icon="BtnSearch" size={24} />
          </S.BtnSearch>
        </S.HeaderInner>
      )}
      <S.HeaderInner useBack={useBack}>
        {useBack && (
          <S.BtnBack bgColor={bgColor} onClick={() => pop()}>
            <Icon icon="BtnBack" size={24} />
          </S.BtnBack>
        )}
        {title && !useLink && <S.Tit>{title}</S.Tit>}
        {title && useLink && (
          <S.Tit useLink={useLink}>
            <S.TitBtn>{title}</S.TitBtn>
          </S.Tit>
        )}
        {useRefresh && (
          <S.BtnReset>
            <Icon icon="BtnRefresh" size={24} />
          </S.BtnReset>
        )}
      </S.HeaderInner>
    </S.Header>
  );
};

export default Header;
