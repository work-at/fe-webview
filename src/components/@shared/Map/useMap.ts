import { useCallback, useState } from "react";

import { Coordinates, PinItem } from "@/domains/map.type";

export interface UseMapProps {
  userCoordinates: Coordinates;
  pins: PinItem[];
}

const useMap = ({ userCoordinates, pins }: UseMapProps) => {
  const [centerCoordinates, setCenterCoordinates] = useState(userCoordinates);
  const [selectedPinId, setSelectedPinId] = useState<number | undefined>();

  const selectPin = useCallback(
    (id: number | undefined) => {
      const selectedPin = pins?.find((pin) => pin.id === id);

      setSelectedPinId(id);
      selectedPin && setCenterCoordinates({ lat: selectedPin.coordinates.lat, lng: selectedPin.coordinates.lng });
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
