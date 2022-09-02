import { useUserAddressQuery } from "@/domains/user";
import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import useCoordinates from "@/services/useCoordinates/useCoordinates";
import { useInjectKakaoMapApi } from "react-kakao-maps-sdk";
import MapManager from "@/components/map/MapManager";
import { useStack } from "@stackflow/react";

const API_KEY = process.env.KAKAO_MAP_API_KEY;

const MapPage = () => {
  const stack = useStack();

  const { userCoordinates } = useCoordinates();

  const { data: userAddress } = useUserAddressQuery(
    {
      lat: userCoordinates?.lat ?? 0,
      lng: userCoordinates?.lng ?? 0,
    },
    {
      enabled: !!userCoordinates,
      suspense: false,
    }
  );

  const { error: mapLoadingError, loading: isMapLoading } = useInjectKakaoMapApi({
    appkey: API_KEY!,
    retries: 5,
  });

  if (!userCoordinates) {
    return (
      <StackLayout appBar={{ title: userAddress }} navigationPath="map">
        <div>현재 좌표 로딩중</div>
      </StackLayout>
    );
  }

  if (isMapLoading) {
    return (
      <StackLayout appBar={{ title: userAddress }} navigationPath="map">
        <div>지도 로딩중</div>{" "}
      </StackLayout>
    );
  }

  if (mapLoadingError) {
    return (
      <StackLayout appBar={{ title: userAddress }} navigationPath="map">
        <div>지도 정보를 불러오는데 실패하였습니다</div>
      </StackLayout>
    );
  }

  if (
    stack.activities.filter(({ transitionState }) => transitionState === "enter-done").length > 1 ||
    stack.globalTransitionState === "loading"
  ) {
    return (
      <StackLayout isHide navigationPath="map">
        <MapManager userCoordinates={userCoordinates} />
      </StackLayout>
    );
  }

  return (
    <StackLayout appBar={{ title: userAddress }} navigationPath="map">
      <MapManager userCoordinates={userCoordinates} />
    </StackLayout>
  );
};

export default MapPage;
