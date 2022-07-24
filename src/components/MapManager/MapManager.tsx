import { Z_INDEX } from "@/constants/zIndex";
import { Coordinates } from "@/domains/map.type";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useInjectKakaoMapApi } from "react-kakao-maps-sdk";
import Map from "../@shared/Map";

import useReLoadButton from "../@shared/Map/ReLoadButton/useReLoadButton";
import Tabs, { TabItem } from "../@shared/Tabs";

import useCafeMap from "./useCafeMap";
import useDinerMap from "./useDinerMap";
import useWorkerMap from "./useWorkerMap";

import CAFE_DINER_PIN_PNG from "@/assets/images/cafe-diner-pin.png";
import SELECTED_CAFE_DINER_PIN_PNG from "@/assets/images/selected-cafe-diner-pin.png";
import WORKER_PIN_PNG from "@/assets/images/worker-pin.png";
import SELECTED_WORKER_PIN_PNG from "@/assets/images/selected-worker-pin.png";

import * as S from "./MapManager.styled";
import BottomDrawer from "../@shared/BottomDrawer/BottomDrawer";
import CardList from "../@shared/CardList";

type MapManagerProps = {
  userCoordinates: Coordinates;
};

type MapTabId = "cafe" | "diner" | "worker";

const TAB_ITEMS: TabItem<MapTabId>[] = [
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

const API_KEY = process.env.KAKAO_MAP_API_KEY;

const MapManager = ({ userCoordinates }: MapManagerProps) => {
  const [selectedCardId, setSelectedCardId] = useState<number>();
  const { isReloaded, updateReloadTime } = useReLoadButton();
  const [selectedTabId, setSelectedTabId] = useState<MapTabId>("cafe");
  const [isBottomDrawerOpen, setBottomDrawerOpen] = useState(false);

  const { error: mapLoadingError, loading: isMapLoading } = useInjectKakaoMapApi({
    appkey: API_KEY!,
    retries: 5,
  });

  const { cafe, cafes, cafePins, navigateToCafeDetail } = useCafeMap({
    isSelected: selectedTabId === "cafe",
    isReloaded,
    selectedCardId,
    userCoordinates,
    isListShown: isBottomDrawerOpen,
  });

  const { diner, diners, dinerPins, navigateToDinerDetail } = useDinerMap({
    isSelected: selectedTabId === "diner",
    isReloaded,
    selectedCardId,
    userCoordinates,
    isListShown: isBottomDrawerOpen,
  });

  const { worker, workers, workerPins, navigateToWorkerDetail } = useWorkerMap({
    isSelected: selectedTabId === "worker",
    isReloaded,
    selectedCardId,
    userCoordinates,
    isListShown: isBottomDrawerOpen,
  });

  const pins = useMemo(() => {
    switch (selectedTabId) {
      case "cafe":
        return cafePins;
      case "diner":
        return dinerPins;
      default:
        return workerPins;
    }
  }, [selectedTabId, cafePins, dinerPins, workerPins]);

  const pinInfo = useMemo(
    () =>
      ["cafe", "diner"].includes(selectedTabId)
        ? {
            pinImage: CAFE_DINER_PIN_PNG,
            selectedPinImage: SELECTED_CAFE_DINER_PIN_PNG,
            pinSize: {
              width: 26,
              height: 36,
            },
            selectedPinSize: {
              width: 42,
              height: 60,
            },
          }
        : {
            pinImage: WORKER_PIN_PNG,
            selectedPinImage: SELECTED_WORKER_PIN_PNG,
            pinSize: {
              width: 29,
              height: 39,
            },
            selectedPinSize: {
              width: 35,
              height: 35,
            },
          },
    [selectedTabId]
  );

  const cardInfo = useMemo(() => {
    switch (selectedTabId) {
      case "cafe":
        if (!cafe) {
          return;
        } else {
          return {
            id: cafe.id,
            type: "cafe" as const,
            title: cafe.name,
            imageUrl: cafe.imageUrl,
            reviewNum: 12,
            addr: cafe.region,
            job: cafe.region,
            year: String(12),
            tags: cafe.tags,
            onClick: () => navigateToCafeDetail(cafe.id),
          };
        }
      case "diner":
        if (!diner) {
          return;
        } else {
          return {
            id: diner.id,
            type: "diner" as const,
            title: diner.name,
            imageUrl: diner.imageUrl,
            reviewNum: 12,
            addr: diner.region,
            job: diner.region,
            year: String(12),
            tags: diner.tags,
            onClick: () => navigateToDinerDetail(diner.id),
          };
        }
      default:
        if (!worker) {
          return;
        } else {
          return {
            id: worker.id,
            type: "worker" as const,
            title: worker.name,
            imageUrl: worker.imageUrl,
            reviewNum: 12,
            addr: worker.job,
            job: worker.job,
            year: String(12),
            tags: worker.tags,
            onClick: () => navigateToWorkerDetail(worker.id),
          };
        }
    }
  }, [selectedTabId, cafe, diner, worker, navigateToCafeDetail, navigateToDinerDetail, navigateToWorkerDetail]);

  const CardListInfo = useMemo(() => {
    switch (selectedTabId) {
      case "cafe":
        if (!cafes) {
          return;
        } else {
          return {
            items: cafes.map((cafe) => ({
              id: cafe.id,
              type: "cafe" as const,
              title: cafe.name,
              imageUrl: cafe.imageUrl,
              reviewNum: 12,
              addr: cafe.region,
              job: cafe.region,
              year: String(12),
              tags: cafe.tags,
            })),
            onClick: navigateToCafeDetail,
          };
        }
      case "diner":
        if (!diners) {
          return;
        } else {
          return {
            items: diners.map((diner) => ({
              id: diner.id,
              type: "diner" as const,
              title: diner.name,
              imageUrl: diner.imageUrl,
              reviewNum: 12,
              addr: diner.region,
              job: diner.region,
              year: String(12),
              tags: diner.tags,
            })),
            onClick: navigateToDinerDetail,
          };
        }
      default:
        if (!workers) {
          return;
        } else {
          return {
            items: workers.map((worker) => ({
              id: worker.id,
              type: "worker" as const,
              title: worker.name,
              imageUrl: worker.imageUrl,
              reviewNum: 12,
              addr: worker.job,
              job: worker.job,
              year: String(12),
              tags: worker.tags,
            })),
            onClick: navigateToWorkerDetail,
          };
        }
    }
  }, [selectedTabId, cafes, diners, workers, navigateToCafeDetail, navigateToDinerDetail, navigateToWorkerDetail]);

  const handleTabIdChange = useCallback(
    (id: MapTabId) => {
      updateReloadTime();
      setSelectedTabId(id);
    },
    [updateReloadTime]
  );

  const handleListToggleButtonClick = useCallback(() => setBottomDrawerOpen((isOpen) => !isOpen), []);

  const handleBottomDrawerClose = useCallback(() => setBottomDrawerOpen(false), []);

  if (isMapLoading) {
    return <div>지도 로딩중</div>;
  }

  if (mapLoadingError) {
    return <div>지도 정보를 불러오는데 실패하였습니다</div>;
  }

  return (
    <>
      <Tabs items={TAB_ITEMS} onSelect={handleTabIdChange} />
      <Map
        pins={pins ?? []}
        userCoordinates={userCoordinates}
        zIndex={Z_INDEX.MIDDLE}
        onPinSelect={setSelectedCardId}
        {...pinInfo}
      />
      {cardInfo && <S.Card {...cardInfo} />}
      <S.ReLoadButton onClick={updateReloadTime}>현 지도에서 검색</S.ReLoadButton>
      <S.ListToggleButton onClick={handleListToggleButtonClick}>리스트 보기</S.ListToggleButton>
      <S.BottomDrawer isOpen={isBottomDrawerOpen} onClose={handleBottomDrawerClose}>
        <S.DrawerHeader />
        <S.DrawerBody>
          <CardList onCardClick={CardListInfo?.onClick} items={CardListInfo?.items ?? []} />
        </S.DrawerBody>
      </S.BottomDrawer>
    </>
  );
};

export default MapManager;
