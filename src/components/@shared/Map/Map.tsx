import { memo, useCallback } from "react";

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
  const { isMapLoadFailed, isMapLoading, centerCoordinates, selectPin, selectedPinId } = useMap({
    pins,
    userCoordinates,
  });

  const handlePinSelect = useCallback((id: number) => {
    onPinSelect(id);
    selectPin(id);
  }, []);

  if (isMapLoading) {
    return <div>지도 로딩중</div>;
  }

  if (isMapLoadFailed) {
    return <div>지도 정보를 불러오는데 실패하였습니다</div>;
  }

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

export default memo(Map);
