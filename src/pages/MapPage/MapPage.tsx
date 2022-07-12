import { useCallback, useState } from "react";

import Tabs, { TabItem } from "@/components/@shared/Tabs";

import Page from "../page";
import * as S from "./MapPage.styled";
import { useCoordinatesService } from "@/services/useCoordinates/useCoordinates";
import CafeMap from "@/components/CafeMap";
import DinerMap from "@/components/DinerMap";
import WorkerMap from "@/components/WorkerMap";
import { useUserAddressQuery } from "@/domains/user";
import NavigationToolBar from "@/components/NavigationToolBar/NavigationToolBar";

type MapTabId = "cafe" | "diner" | "worker";

const TAB_ITEMS: Array<TabItem<MapTabId>> = [
  { id: "cafe", label: "카페" },
  {
    id: "diner",
    label: "음식점",
  },
  {
    id: "worker",
    label: "워케이셔너",
  },
];

const MapPage = () => {
  const { data: userCoordinates } = useCoordinatesService({
    refetchInterval: 1000,
  });

  const [selectedTabId, setSelectedTabId] = useState<MapTabId>("cafe");
  // TODO : userCoordinates 가 undefined 일 때 더 깔끔하게 처리하는 방법
  const { data: userAddress } = useUserAddressQuery(
    {
      lat: userCoordinates?.lat ?? 0,
      lng: userCoordinates?.lng ?? 0,
    },
    {
      enabled: !!userCoordinates,
    }
  );

  const handleTabIdChange = useCallback((id: MapTabId) => {
    setSelectedTabId(id);
  }, []);

  if (!userCoordinates) {
    return <div>현재 좌표 로딩중</div>;
  }

  return (
    <Page title="Workat_지도">
      <S.Header>
        <S.Address>{userAddress?.address}</S.Address>
      </S.Header>
      {/* TODO : 리액트 컴포넌트 제네릭 적용하기 */}
      <Tabs items={TAB_ITEMS} onSelect={handleTabIdChange as any} />
      {selectedTabId === "cafe" && <CafeMap userCoordinates={userCoordinates} />}
      {selectedTabId === "diner" && <DinerMap userCoordinates={userCoordinates} />}
      {selectedTabId === "worker" && <WorkerMap userCoordinates={userCoordinates} />}
      <NavigationToolBar />
    </Page>
  );
};

export default MapPage;
