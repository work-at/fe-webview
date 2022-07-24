import * as S from "./MapPage.styled";
import { useCoordinatesService } from "@/services/useCoordinates/useCoordinates";
import { useUserAddressQuery } from "@/domains/user";
import StackLayout from "@/components/@layout/StackLayout/StackLayout";
import MapManager from "@/components/MapManager";

const MapPage = () => {
  const { data: userCoordinates } = useCoordinatesService({
    suspense: false,
    refetchInterval: 5000,
  });

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

  if (!userCoordinates) {
    return <div>현재 좌표 로딩중</div>;
  }

  return (
    <StackLayout appBar={{ title: "Workat_지도" }} navigationPath="map">
      <S.Header>
        <S.Address>{userAddress?.address}</S.Address>
      </S.Header>
      <MapManager userCoordinates={userCoordinates} />
    </StackLayout>
  );
};

export default MapPage;
