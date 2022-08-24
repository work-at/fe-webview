import { useCallback } from "react";

import MapView, { MapViewProps } from "./Map.view";
import useMap from "./useMap";

interface MapProps
  extends Pick<
    MapViewProps,
    | "pins"
    | "userCoordinates"
    | "pinImage"
    | "pinSize"
    | "selectedPinImage"
    | "selectedPinSize"
    | "zIndex"
    | "onPinSelect"
  > {}

const Map = ({ pins, userCoordinates, onPinSelect, ...rest }: MapProps) => {
  const { centerCoordinates, selectedPinId, selectPin } = useMap({
    pins,
    userCoordinates,
  });

  const handlePinSelect = useCallback(
    (id: number | undefined) => {
      onPinSelect(id);
      selectPin(id);
    },
    [onPinSelect, selectPin]
  );

  return (
    <MapView
      pins={pins}
      userCoordinates={userCoordinates}
      centerCoordinates={centerCoordinates}
      selectedPinId={selectedPinId}
      onPinSelect={handlePinSelect}
      {...rest}
    />
  );
};

export default Map;
