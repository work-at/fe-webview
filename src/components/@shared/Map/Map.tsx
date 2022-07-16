import { memo } from "react";

import MapView, { MapViewProps } from "./Map.view";
import useMap from "./useMap";

export interface MapProps
  extends Pick<
    MapViewProps,
    "pins" | "userCoordinates" | "pinImage" | "pinSize" | "selectedPinImage" | "selectedPinSize" | "zIndex"
  > {}

const Map = ({ pins, userCoordinates, ...rest }: MapProps) => {
  const { isMapLoadFailed, isMapLoading, centerCoordinates, selectPin, selectedPinId } = useMap({
    pins,
    userCoordinates,
  });

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
      onPinSelect={selectPin}
      {...rest}
    />
  );
};

export default memo(Map);
