import { Z_INDEX } from "@/constants/zIndex";
import { Coordinates } from "@/domains/map.type";
import { useWorkerPinsQuery, useWorkerQuery } from "@/domains/worker";
import Map from "../@shared/Map";
import useReLoadButton from "../@shared/Map/ReLoadButton/useReLoadButton";

import WORKER_PIN_PNG from "@/assets/images/worker-pin.png";
import SELECTED_WORKER_PIN_PNG from "@/assets/images/selected-worker-pin.png";
import { useState } from "react";

import * as S from "./WorkerMap.styled";

type WorkerMapProps = {
  userCoordinates: Coordinates;
};

const WorkerMap = ({ userCoordinates }: WorkerMapProps) => {
  const [selectedCardId, setSelectedCardId] = useState<number>();
  const { isReloaded, updateReloadTime } = useReLoadButton();
  const {
    data: workerPins,
    isLoading,
    isError,
  } = useWorkerPinsQuery(
    {
      lat: userCoordinates ? userCoordinates.lat : 0,
      lng: userCoordinates ? userCoordinates.lng : 0,
      page: 1,
    },
    {
      enabled: isReloaded,
      keepPreviousData: true,
    }
  );

  const { data: worker } = useWorkerQuery(
    {
      id: selectedCardId ?? 0,
    },
    {
      enabled: !!selectedCardId,
    }
  );

  return (
    <>
      {isLoading && (
        <div style={{ position: "fixed", top: "10px", left: "0", right: "0", zIndex: Z_INDEX.HIGH }}>
          주변 워케이셔너 검색중
        </div>
      )}
      {isError && (
        <div style={{ position: "fixed", top: "10px", left: "0", right: "0", zIndex: Z_INDEX.HIGH }}>
          워케이셔너 정보를 로드하지 못했습니다.
        </div>
      )}
      <Map
        pins={workerPins ?? []}
        userCoordinates={userCoordinates}
        zIndex={Z_INDEX.MIDDLE}
        pinImage={WORKER_PIN_PNG}
        selectedPinImage={SELECTED_WORKER_PIN_PNG}
        pinSize={{
          width: 29,
          height: 39,
        }}
        selectedPinSize={{
          width: 35,
          height: 35,
        }}
        onPinSelect={setSelectedCardId}
      />
      {selectedCardId && worker && (
        <S.WorkerCard
          id={worker.id}
          title={worker.name}
          imageUrl={
            "https://images.unsplash.com/photo-1475823678248-624fc6f85785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGtvcmVhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          }
          leftSubTitle={worker.job}
          rightSubTitle={`${worker.yearOfService}년차`}
          tags={worker.tags}
        />
      )}
      <S.ReLoadButton onClick={updateReloadTime}>현 지도에서 검색</S.ReLoadButton>
    </>
  );
};

export default WorkerMap;
