import { useUserAddressQuery } from "@/domains/user";
import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import useCoordinates from "@/services/useCoordinates/useCoordinates";
import { useInjectKakaoMapApi } from "react-kakao-maps-sdk";
import MapManager from "@/components/map/MapManager";
import { useStack } from "@stackflow/react";
import Lottie from "@/components/@shared/Lottie/Lottie.component";

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
        <Lottie source={require("@/assets/loading.json")} speed={2} />
      </StackLayout>
    );
  }

  if (isMapLoading || stack.globalTransitionState === "loading" || !userAddress) {
    return (
      <StackLayout appBar={{ title: userAddress }} navigationPath="map" isHide>
        <Lottie source={require("@/assets/loading.json")} speed={2} />
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

  return (
    <StackLayout
      appBar={{ title: userAddress }}
      navigationPath="map"
      isHide={stack.activities.filter(({ transitionState }) => transitionState === "enter-done").length > 1}
    >
      <MapManager userCoordinates={userCoordinates} userAddress={userAddress} />
    </StackLayout>
  );
};

export default MapPage;
