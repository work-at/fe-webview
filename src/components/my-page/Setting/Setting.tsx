import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { useUserLocationBlockMutation } from "@/domains/user";
import { useCallback } from "react";
import * as S from "./Setting.styled";

const Setting = () => {
  const { mutateAsync: blockUserLocation } = useUserLocationBlockMutation();

  // TODO : 해제하기도 연동 + 분기처리
  const handleUserLocationBlockChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target }) => {
      !target.checked && blockUserLocation();
    },
    [blockUserLocation]
  );

  const handleLogout = useCallback(() => {
    sessionStorage.removeItem("ACCESS_TOKEN");
    location.href = "/";
  }, []);

  return (
    <StackLayout>
      <S.MySettingWrap>
        <S.SettingList>
          <S.SettingItem>
            내 위치를 지도에 노출하기
            <S.ToggleWrapper>
              <S.ToggleBox id="checkbox" type="checkbox" onChange={handleUserLocationBlockChange} />
              <S.ToggleBoxLabel htmlFor="checkbox" />
            </S.ToggleWrapper>
          </S.SettingItem>
          <S.SettingItem>
            <S.BtnLogout onClick={handleLogout}>로그아웃</S.BtnLogout>
          </S.SettingItem>
        </S.SettingList>
      </S.MySettingWrap>
    </StackLayout>
  );
};

export default Setting;
