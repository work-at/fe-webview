import { Z_INDEX } from "@/constants/zIndex";
import { Coordinates } from "@/domains/map.type";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Map from "../../@shared/Map";

import useReLoadButton from "../../@shared/Map/ReLoadButton/useReLoadButton";
import Tabs, { TabItem } from "../../@shared/Tabs";

import useCafeMap from "./useCafeMap";
import useDinerMap from "./useDinerMap";
import useWorkerMap from "./useWorkerMap";

import CAFE_PIN_PNG from "@/assets/images/cafe-pin.png";
import SELECTED_CAFE_PIN_PNG from "@/assets/images/selected-cafe-pin.png";
import DINER_PIN_PNG from "@/assets/images/diner-pin.png";
import SELECTED_DINER_PIN_PNG from "@/assets/images/selected-diner-pin.png";

import WORKER_PIN_PNG from "@/assets/images/worker-pin.png";
import SELECTED_WORKER_PIN_PNG from "@/assets/images/selected-worker-pin.png";

import * as S from "./MapManager.styled";
import CardList from "../../@shared/CardList";
import Icon from "@/assets/Icon";
import { useNearWorkersCountQuery } from "@/domains/user";
import { atom, useAtom } from "jotai";
import Lottie from "@/components/@shared/Lottie/Lottie.component";

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
    label: "워크챗",
  },
];

const userCoordinatesCache: Coordinates = {
  lat: 0,
  lng: 0,
};

export const shouldMapReloadAtom = atom(false);

const MapManager = ({ userCoordinates }: MapManagerProps) => {
  const [selectedCardId, setSelectedCardId] = useState<number | undefined>();
  const { isReloaded, updateReloadTime } = useReLoadButton();
  const [selectedTabId, setSelectedTabId] = useState<MapTabId>("cafe");
  const [isBottomDrawerOpen, setBottomDrawerOpen] = useState(false);
  const [shouldMapReload, setShouldMapReload] = useAtom(shouldMapReloadAtom);

  const { cafes, cafePins, navigateToCafeDetail } = useCafeMap({
    isSelected: selectedTabId === "cafe",
    isReloaded,
    userCoordinates,
  });

  const { diners, dinerPins, navigateToDinerDetail } = useDinerMap({
    isSelected: selectedTabId === "diner",
    isReloaded,
    userCoordinates,
  });

  const { workers, workerPins, navigateToWorkerDetail } = useWorkerMap({
    isSelected: selectedTabId === "worker",
    isReloaded,
  });

  const { data: nearWorkersCount } = useNearWorkersCountQuery({
    enabled: isReloaded,
    suspense: false,
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

  const pinInfo = useMemo(() => {
    if (selectedTabId === "cafe") {
      return {
        pinImage: CAFE_PIN_PNG,
        selectedPinImage: SELECTED_CAFE_PIN_PNG,
        pinSize: {
          width: 35,
          height: 40,
        },
        selectedPinSize: {
          width: 60,
          height: 60,
        },
      };
    }

    if (selectedTabId === "diner") {
      return {
        pinImage: DINER_PIN_PNG,
        selectedPinImage: SELECTED_DINER_PIN_PNG,
        pinSize: {
          width: 35,
          height: 40,
        },
        selectedPinSize: {
          width: 60,
          height: 60,
        },
      };
    }

    return {
      pinImage: WORKER_PIN_PNG,
      selectedPinImage: SELECTED_WORKER_PIN_PNG,
      pinSize: {
        width: 35,
        height: 40,
      },
      selectedPinSize: {
        width: 60,
        height: 60,
      },
    };
  }, [selectedTabId]);

  const cardInfo = useMemo(() => {
    switch (selectedTabId) {
      case "cafe": {
        const cafe = cafes?.find((cafe) => cafe.id === selectedCardId);

        if (!cafe) {
          return;
        } else {
          return {
            id: cafe.id,
            type: "cafe" as const,
            title: cafe.name,
            imageUrl: cafe.imageUrl,
            reviewNum: cafe.reviewCount,
            addr: cafe.address,
            tags: cafe.tags,
            onClick: () => {
              navigateToCafeDetail(cafe.id);
            },
          };
        }
      }
      case "diner": {
        const diner = diners?.find((diner) => diner.id === selectedCardId);

        if (!diner) {
          return;
        } else {
          return {
            id: diner.id,
            type: "diner" as const,
            title: diner.name,
            imageUrl: diner.imageUrl,
            reviewNum: diner.reviewCount,
            addr: diner.address,
            tags: diner.tags,
            onClick: () => navigateToDinerDetail(diner.id),
          };
        }
      }
      default: {
        const worker = workers?.find((worker) => worker.id === selectedCardId);

        if (!worker) {
          return;
        } else {
          return {
            id: worker.id,
            type: "worker" as const,
            title: worker.name,
            imageUrl: worker.imageUrl,
            addr: worker.job,
            job: worker.job,
            year: worker.yearOfService,
            tags: worker.tags,
            onClick: () => navigateToWorkerDetail(worker.id),
          };
        }
      }
    }
  }, [
    selectedTabId,
    selectedCardId,
    cafes,
    diners,
    workers,
    navigateToCafeDetail,
    navigateToDinerDetail,
    navigateToWorkerDetail,
  ]);

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
              reviewNum: cafe.reviewCount,
              addr: cafe.address,
              tags: cafe.tags,
            })),
            onClick: (id: number) => {
              navigateToCafeDetail(id);
              setBottomDrawerOpen(false);
            },
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
              addr: diner.address,
              tags: diner.tags,
            })),
            onClick: (id: number) => {
              navigateToDinerDetail(id);
              setBottomDrawerOpen(false);
            },
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
              year: worker.yearOfService,
              tags: worker.tags,
            })),
            onClick: (id: number) => {
              navigateToWorkerDetail(id);
              setBottomDrawerOpen(false);
            },
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

  const handleListToggleButtonClick = useCallback(
    () => setBottomDrawerOpen((isOpen) => !isOpen),
    [setBottomDrawerOpen]
  );

  const handleBottomDrawerClose = useCallback(() => setBottomDrawerOpen(false), [setBottomDrawerOpen]);

  const handleReload = useCallback(() => {
    updateReloadTime();
    setShouldMapReload(true);
  }, [updateReloadTime, setShouldMapReload]);

  // TODO : 백그라운드에서 실행되도록 위치 옮기기
  useEffect(() => {
    if (userCoordinatesCache.lat === 0 && userCoordinatesCache.lng === 0) {
      (userCoordinatesCache.lat = userCoordinates.lat), (userCoordinatesCache.lng = userCoordinates.lng);
      return;
    }

    const distance =
      new kakao.maps.Polyline({
        path: [
          new kakao.maps.LatLng(userCoordinates.lat, userCoordinatesCache.lat),
          new kakao.maps.LatLng(userCoordinates.lng, userCoordinatesCache.lng),
        ],
      }).getLength() / 1000;

    if (distance < 0.2) {
      return;
    }

    // TODO : 싱크 로직 호출
    (userCoordinatesCache.lat = userCoordinates.lat), (userCoordinatesCache.lng = userCoordinates.lng);
  }, [userCoordinates]);

  if (shouldMapReload) {
    setTimeout(() => {
      setShouldMapReload(false);
    }, 10);
    return <Lottie source={require("@/assets/loading.json")} speed={2} />;
  }

  return (
    <S.MapWrap>
      <S.TabWrap>
        <Tabs items={TAB_ITEMS} onSelect={handleTabIdChange} />
      </S.TabWrap>
      <Map
        pins={pins ?? []}
        userCoordinates={userCoordinates}
        zIndex={Z_INDEX.MIDDLE}
        onPinSelect={setSelectedCardId}
        {...pinInfo}
      />
      {cardInfo && <S.Card {...cardInfo} />}
      <S.BottomBtnWrap>
        <S.BtnLocation onClick={handleReload}>
          <Icon icon="BtnMapLocation" />
        </S.BtnLocation>
        <S.BtnList onClick={handleListToggleButtonClick}>
          <Icon icon="BtnMapList" />
        </S.BtnList>
      </S.BottomBtnWrap>
      <S.WorkerLengWrap>
        <S.WorkerTit>
          내 근방 <br />
          워케이셔너 수
        </S.WorkerTit>
        <S.WorkerLeng>
          <S.Num>{nearWorkersCount?.count}</S.Num>명
        </S.WorkerLeng>
      </S.WorkerLengWrap>
      <S.BottomDrawer isOpen={isBottomDrawerOpen} onClose={handleBottomDrawerClose}>
        <S.DrawerHeader>
          <S.DrawerHeaderTxt>내 주변 카페</S.DrawerHeaderTxt>
        </S.DrawerHeader>
        <S.DrawerBody>
          <CardList onCardClick={CardListInfo?.onClick} items={CardListInfo?.items ?? []} />
        </S.DrawerBody>
      </S.BottomDrawer>
    </S.MapWrap>
  );
};

export default MapManager;
