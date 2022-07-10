import React from "react";
import { Icon } from "@/assets/Icon";
import * as S from "./ToolBar.styled";

export const ToolBar = () => {
  return (
    <S.ToolBar>
      <S.MenuList>
        <S.ListItem>
          <S.ListButton>
            <S.MenuIcon>
              <Icon icon={"Accommodation"} />
            </S.MenuIcon>
            숙소
          </S.ListButton>
        </S.ListItem>
        <S.ListItem>
          <S.ListButton>
            <S.MenuIcon>
              <Icon icon={"Map"} />
            </S.MenuIcon>
            지도
          </S.ListButton>
        </S.ListItem>
        <S.ListItem>
          <S.ListButton>
            <S.MenuIcon>
              <Icon icon={"Community"} />
            </S.MenuIcon>
            커뮤니티
          </S.ListButton>
        </S.ListItem>
        <S.ListItem>
          <S.ListButton>
            <S.MenuIcon>
              <Icon icon={"Mypage"} />
            </S.MenuIcon>
            마이페이지
          </S.ListButton>
        </S.ListItem>
      </S.MenuList>
    </S.ToolBar>
  );
};
