import { Z_INDEX } from "@/constants/zIndex";
import { useCafePinsQuery } from "@/domains/cafe";
import { Coordinates } from "@/domains/map.type";
import Map from "../@shared/Map";
import ReLoadButton from "../@shared/Map/ReLoadButton";
import useReLoadButton from "../@shared/Map/ReLoadButton/useReLoadButton";

import CAFE_DINER_PIN_PNG from "@/assets/images/cafe-diner-pin.png";
import SELECTED_CAFE_DINER_PIN_PNG from "@/assets/images/selected-cafe-diner-pin.png";
import ListCard from "../@shared/CardList/CardList";

type CafeMapProps = {
  userCoordinates: Coordinates;
};

const CafeMap = ({ userCoordinates }: CafeMapProps) => {
  // TODO : Coordinates undefined 인 경우에 대한 타입 처리 생각하기
  // TODO : 페이징 처리 방식 생각하기
  const { isReloaded, updateReloadTime } = useReLoadButton();

  const {
    data: cafePins,
    isLoading,
    isError,
  } = useCafePinsQuery(
    {
      lat: userCoordinates.lat,
      lng: userCoordinates.lng,
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
          주변 카페 검색중
        </div>
      )}
      {isError && (
        <div style={{ position: "fixed", top: "10px", left: "0", right: "0", zIndex: Z_INDEX.HIGH }}>
          카페 정보를 로드하지 못했습니다.
        </div>
      )}
      <Map
        pins={cafePins ?? []}
        userCoordinates={userCoordinates}
        zIndex={Z_INDEX.MIDDLE}
        pinImage={CAFE_DINER_PIN_PNG}
        selectedPinImage={SELECTED_CAFE_DINER_PIN_PNG}
        pinSize={{
          width: 26,
          height: 36,
        }}
        selectedPinSize={{
          width: 42,
          height: 60,
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

export default CafeMap;
