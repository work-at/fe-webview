import { useCallback, useState } from "react";
import { useInjectKakaoMapApi } from "react-kakao-maps-sdk";

import { Coordinates, PinItem } from "@/domains/map.type";

export interface UseMapProps {
  userCoordinates: Coordinates;
  pins: PinItem[];
}

const API_KEY = process.env.KAKAO_MAP_API_KEY;

const useMap = ({ userCoordinates, pins }: UseMapProps) => {
  const [centerCoordinates, setCenterCoordinates] = useState(userCoordinates);
  const [selectedPinId, setSelectedPinId] = useState<number | undefined>();

  const { error, loading } = useInjectKakaoMapApi({
    appkey: API_KEY!,
    retries: 5,
  });

  const selectPin = useCallback(
    (id: number) => {
      const selectedPin = pins?.find((pin) => pin.id === id);

      if (!selectedPin) {
        throw new Error("선택된 핀을 찾을 수 없습니다.");
      }

      setSelectedPinId(id);
      setCenterCoordinates({ lat: selectedPin.coordinates.lat, lng: selectedPin.coordinates.lng });
    },
    [pins]
  );

  return {
    centerCoordinates,
    selectedPinId,
    isMapLoadFailed: error,
    isMapLoading: loading,
    selectPin,
  };
};

export default useMap;
