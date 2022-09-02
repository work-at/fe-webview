import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { useUserLocationTrackingToggleMutation } from "@/domains/user";
import { isUserLocationBlockedAtom } from "@/pages/MyPage/MyPage";
import { useAtom } from "jotai";
import { useCallback } from "react";
import * as S from "./Setting.styled";

const Setting = () => {
  // TODO : 동시 접속환경 고려하기 & 새로고침 처리하기
  const [isUserLocationBlocked, setIsUserLocationBlocked] = useAtom(isUserLocationBlockedAtom);

  const { mutateAsync: toggleUserLocationTracking } = useUserLocationTrackingToggleMutation();

  const handleUserLocationBlockChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target }) => {
      toggleUserLocationTracking(target.checked);
      setIsUserLocationBlocked(target.checked);
    },
    [toggleUserLocationTracking, setIsUserLocationBlocked]
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
              <S.ToggleBox
                id="checkbox"
                type="checkbox"
                onChange={handleUserLocationBlockChange}
                checked={isUserLocationBlocked}
              />
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
