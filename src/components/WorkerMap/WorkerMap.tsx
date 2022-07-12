import { Z_INDEX } from "@/constants/zIndex";
import { Coordinates } from "@/domains/map.type";
import { useWorkerPinsQuery } from "@/domains/worker";
import Map from "../@shared/Map";
import ReLoadButton from "../@shared/Map/ReLoadButton";
import useReLoadButton from "../@shared/Map/ReLoadButton/useReLoadButton";

import WORKER_PIN_PNG from "@/assets/images/worker-pin.png";
import SELECTED_WORKER_PIN_PNG from "@/assets/images/selected-worker-pin.png";

type WorkerMapProps = {
  userCoordinates: Coordinates;
};

const WorkerMap = ({ userCoordinates }: WorkerMapProps) => {
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
      />
      <ReLoadButton
        style={{ position: "fixed", bottom: "10px", right: "10px", zIndex: Z_INDEX.HIGH }}
        onClick={updateReloadTime}
      >
        현 지도에서 검색
      </ReLoadButton>
    </>
  );
};

export default WorkerMap;
