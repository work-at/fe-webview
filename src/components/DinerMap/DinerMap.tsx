import { Z_INDEX } from "@/constants/zIndex";
import { useDinerPinsQuery } from "@/domains/diner";
import { Coordinates } from "@/domains/map.type";
import Map from "../@shared/Map";
import ReLoadButton from "../@shared/Map/ReLoadButton";
import useReLoadButton from "../@shared/Map/ReLoadButton/useReLoadButton";

import CAFE_DINER_PIN_PNG from "@/assets/images/cafe-diner-pin.png";
import SELECTED_CAFE_DINER_PIN_PNG from "@/assets/images/selected-cafe-diner-pin.png";

type DinerMapProps = {
  userCoordinates: Coordinates;
};

const DinerMap = ({ userCoordinates }: DinerMapProps) => {
  const { isReloaded, updateReloadTime } = useReLoadButton();
  const {
    data: dinerPins,
    isLoading,
    isError,
  } = useDinerPinsQuery(
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
          주변 음식점 검색중
        </div>
      )}
      {isError && (
        <div style={{ position: "fixed", top: "10px", left: "0", right: "0", zIndex: Z_INDEX.HIGH }}>
          음식점 정보를 로드하지 못했습니다.
        </div>
      )}
      <Map
        pins={dinerPins ?? []}
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

export default DinerMap;
