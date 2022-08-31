import * as S from "./MapPage.styled";
import { useUserAddressQuery } from "@/domains/user";
import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import useCoordinates from "@/services/useCoordinates/useCoordinates";
import { useInjectKakaoMapApi } from "react-kakao-maps-sdk";
import MapManager from "@/components/map/MapManager";
import { createPortal } from "react-dom";

const API_KEY = process.env.KAKAO_MAP_API_KEY;

const MapPage = () => {
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
    return <div>현재 좌표 로딩중</div>;
  }

  if (isMapLoading) {
    return <div>지도 로딩중</div>;
  }

  if (mapLoadingError) {
    return <div>지도 정보를 불러오는데 실패하였습니다</div>;
  }

  return (
    <StackLayout appBar={{ title: userAddress }} navigationPath="map">
      <MapManager userCoordinates={userCoordinates} />
    </StackLayout>
  );
};

export default MapPage;
