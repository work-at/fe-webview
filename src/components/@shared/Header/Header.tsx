import React from "react";
import Icon from "@/assets/Icon";
import * as S from "./Header.styled";
import { useFlow } from "@/stack";

export type HeaderProps = {
  main?: boolean;
  MagazinLogo?: "seoul" | "jeju" | "gangWon";
  bgColor?: boolean;
  useBack?: boolean;
  useRefresh?: boolean;
  title?: string;
  fixed?: boolean;
  useLink?: boolean;
  search?: boolean;
  accommArea?: boolean;
};

const Header = ({
  main,
  MagazinLogo,
  bgColor,
  useBack,
  title,
  useRefresh,
  fixed,
  useLink,
  search,
  accommArea,
}: HeaderProps) => {
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

        {MagazinLogo === "jeju" && (
          <S.MagazineLogo>
            <Icon icon="MagazinJejuLogo" />
          </S.MagazineLogo>
        )}
        {MagazinLogo === "seoul" && (
          <S.MagazineLogo>
            <Icon icon="MagazinSeoulLogo" />
          </S.MagazineLogo>
        )}
        {MagazinLogo === "gangWon" && (
          <S.MagazineLogo>
            <Icon icon="MagazinGangWonLogo" />
          </S.MagazineLogo>
        )}

        {search && (
          <S.SearchInputWrap>
            <S.SearchInput type="text" />
            <S.BtnConfirm>
              <Icon icon="BtnSearch" size={24} />
            </S.BtnConfirm>
          </S.SearchInputWrap>
        )}

        {accommArea && (
          <S.AccommSelectWrap>
            <S.AccommSelect defaultValue={"default"}>
              <option>전체</option>
              <option>서울</option>
              <option>제주</option>
              <option>강릉</option>
              <option>속초</option>
            </S.AccommSelect>
            <S.AccommIconArr></S.AccommIconArr>
          </S.AccommSelectWrap>
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
