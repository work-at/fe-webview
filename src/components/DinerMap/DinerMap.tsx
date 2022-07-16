import { Z_INDEX } from "@/constants/zIndex";
import { useDinerPinsQuery, useDinerQuery } from "@/domains/diner";
import { Coordinates } from "@/domains/map.type";
import Map from "../@shared/Map";
import useReLoadButton from "../@shared/Map/ReLoadButton/useReLoadButton";

import CAFE_DINER_PIN_PNG from "@/assets/images/cafe-diner-pin.png";
import SELECTED_CAFE_DINER_PIN_PNG from "@/assets/images/selected-cafe-diner-pin.png";
import { useCallback, useState } from "react";

import * as S from "./DinerMap.styled";
import { PATH } from "@/constants";
import { useNavigate } from "react-router-dom";

type DinerMapProps = {
  userCoordinates: Coordinates;
};

const DinerMap = ({ userCoordinates }: DinerMapProps) => {
  const [selectedCardId, setSelectedCardId] = useState<number>();
  const { isReloaded, updateReloadTime } = useReLoadButton();
  const navigate = useNavigate();

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

  const { data: diner } = useDinerQuery(
    {
      id: selectedCardId ?? 0,
    },
    {
      enabled: !!selectedCardId,
    }
  );

  const handleSelectedCardClick = useCallback((id: number) => {
    navigate(`${PATH.MAP.DINER.full}/${id}`);
  }, []);

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
        onPinSelect={setSelectedCardId}
      />
      {selectedCardId && diner && (
        <S.DinerCard
          id={diner.id}
          title={diner.name}
          imageUrl={
            "https://images.unsplash.com/photo-1605972023865-471b1488b6a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGtvcmVhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          }
          leftSubTitle={diner.region}
          rightSubTitle="음식점"
          tags={diner.tags}
          onClick={() => handleSelectedCardClick(diner.id)}
        />
      )}
      <S.ReLoadButton onClick={updateReloadTime}>현 지도에서 검색</S.ReLoadButton>
    </>
  );
};

export default DinerMap;
