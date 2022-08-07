import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import { useUserLocationBlockMutation } from "@/domains/user";
import { useCallback } from "react";

const Setting = () => {
  const { mutateAsync: blockUserLocation } = useUserLocationBlockMutation();

  // TODO : 해제하기도 연동 + 분기처리
  const handleUserLocationBlockChange = useCallback(() => {
    blockUserLocation();
  }, [blockUserLocation]);

  return (
    <StackLayout>
      <label>
        내 위치를 지도에 노출하기
        <input type="checkbox" onChange={handleUserLocationBlockChange} />
      </label>
      <button>로그아웃</button>
    </StackLayout>
  );
};

export default Setting;
