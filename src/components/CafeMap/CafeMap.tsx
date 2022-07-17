import { useCallback, useState } from "react";
import { Z_INDEX } from "@/constants/zIndex";
import { useCafePinsQuery, useCafeQuery } from "@/domains/cafe";
import { Coordinates } from "@/domains/map.type";
import Map from "../@shared/Map";
import useReLoadButton from "../@shared/Map/ReLoadButton/useReLoadButton";

import CAFE_DINER_PIN_PNG from "@/assets/images/cafe-diner-pin.png";
import SELECTED_CAFE_DINER_PIN_PNG from "@/assets/images/selected-cafe-diner-pin.png";

import * as S from "./CafeMap.styled";
import { useNavigate } from "react-router-dom";
import { PATH } from "@/constants";

type CafeMapProps = {
  userCoordinates: Coordinates;
};

const CafeMap = ({ userCoordinates }: CafeMapProps) => {
  // TODO : Coordinates undefined 인 경우에 대한 타입 처리 생각하기
  // TODO : 페이징 처리 방식 생각하기
  const [selectedCardId, setSelectedCardId] = useState<number>();
  const { isReloaded, updateReloadTime } = useReLoadButton();
  const navigate = useNavigate();

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

  const { data: cafe } = useCafeQuery(
    {
      id: selectedCardId ?? 0,
    },
    {
      enabled: !!selectedCardId,
    }
  );

  const handleSelectedCardClick = useCallback((id: number) => {
    navigate(`${PATH.MAP.CAFE.full}/${id}`);
  }, []);

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
        onPinSelect={setSelectedCardId}
      />
      {selectedCardId && cafe && (
        <S.CafeCard
          id={cafe.id}
          title={cafe.name}
          imageUrl={
            "https://images.unsplash.com/photo-1605972023865-471b1488b6a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGtvcmVhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          }
          leftSubTitle={cafe.region}
          rightSubTitle="카페"
          tags={cafe.tags}
          onClick={() => handleSelectedCardClick(cafe.id)}
        />
      )}
      <S.ReLoadButton onClick={updateReloadTime}>현 지도에서 검색</S.ReLoadButton>
    </>
  );
};

export default CafeMap;
