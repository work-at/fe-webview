import React from "react";
import Icon from "@/assets/Icon";
import * as S from "./Header.styled";
import { useFlow } from "@/stack";

export type HeaderProps = {
  bgColor?: boolean;
  useBack?: boolean;
  useRefresh?: boolean;
  title?: string;
  fixed?: boolean;
};

const Header = ({ bgColor, useBack, title, useRefresh, fixed }: HeaderProps) => {
  const { pop } = useFlow();
  return (
    <S.Header bgColor={bgColor} fixed={fixed}>
      <S.HeaderInner useBack={useBack}>
        {useBack && (
          <S.BtnBack bgColor={bgColor} onClick={() => pop()}>
            <Icon icon="BtnBack" size={24} />
          </S.BtnBack>
        )}
        {title && <S.Tit>{title}</S.Tit>}
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
