import * as DTO from "./cafe.dto";
import * as Action from "./cafe.action";

export const d2aMapper_GetCafePinsResponse_CafePinsInfo = (response: DTO.GetCafePinsResponse): Action.CafePinsInfo => {
  return response.locations.map((cafePin) => ({
    id: cafePin.id,
    name: cafePin.placeName,
    coordinates: {
      lat: cafePin.y,
      lng: cafePin.x,
    },
  }));
};

const RADIUS = 10;

export const a2dMapper_CafePinsCriteria_GetCafePinsRequest = (
  criteria: Action.CafePinsCriteria
): DTO.GetCafePinsRequest => {
  return {
    latitude: criteria.lat,
    longitude: criteria.lng,
    page: criteria.page,
    radius: RADIUS,
  };
};
