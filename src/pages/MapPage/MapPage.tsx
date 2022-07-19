import Page from "../page";
import * as S from "./MapPage.styled";
import { useCoordinatesService } from "@/services/useCoordinates/useCoordinates";
import { useUserAddressQuery } from "@/domains/user";
import NavigationToolBar from "@/components/NavigationToolBar/NavigationToolBar";
import MapManager from "@/components/MapManager";

const MapPage = () => {
  const { data: userCoordinates } = useCoordinatesService({
    refetchInterval: 5000,
    keepPreviousData: true,
  });

  const { data: userAddress } = useUserAddressQuery(
    {
      lat: userCoordinates?.lat ?? 0,
      lng: userCoordinates?.lng ?? 0,
    },
    {
      enabled: !!userCoordinates,
    }
  );

  if (!userCoordinates) {
    return <div>현재 좌표 로딩중</div>;
  }

  return (
    <Page title="Workat_지도">
      <S.Header>
        <S.Address>{userAddress?.address}</S.Address>
      </S.Header>
      <MapManager userCoordinates={userCoordinates} />
      <NavigationToolBar />
    </Page>
  );
};

export default MapPage;
