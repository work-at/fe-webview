import * as S from "./MySetting.styled";
import Header from "@/components/@shared/Header/Header";

const MySetting = () => {
  return (
    <>
      <Header useBack bgColor />
      <S.MySettingWrap>
        <S.SettingList>
          <S.SettingItem>
            내 위치를 지도에 노출하기
            <S.ToggleWrapper>
              <S.ToggleBox id="checkbox" type="checkbox" />
              <S.ToggleBoxLabel htmlFor="checkbox" />
            </S.ToggleWrapper>
          </S.SettingItem>
          <S.SettingItem>
            <S.BtnLogout>로그아웃</S.BtnLogout>
          </S.SettingItem>
        </S.SettingList>
      </S.MySettingWrap>
    </>
  );
};

export default MySetting;
