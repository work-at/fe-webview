import { useCallback, useState } from "react";
import { useInjectKakaoMapApi } from "react-kakao-maps-sdk";

import { Coordinates, PinItem } from "@/domains/map.type";

export interface UseMapProps {
  userCoordinates: Coordinates;
  pins: PinItem[];
}

const useMap = ({ userCoordinates, pins }: UseMapProps) => {
  const [centerCoordinates, setCenterCoordinates] = useState(userCoordinates);
  const [selectedPinId, setSelectedPinId] = useState<number | undefined>();

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
    selectPin,
  };
};

export default useMap;
