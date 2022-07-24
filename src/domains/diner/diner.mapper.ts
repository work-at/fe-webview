import * as DTO from "./diner.dto";
import * as Action from "./diner.action";

export const d2aMapper_GetDinerPinsResponse_DinerPinsInfo = (
  response: DTO.GetDinerPinsResponse
): Action.DinerPinsInfo => {
  return response.locations.map((DinerPin) => ({
    id: DinerPin.id,
    name: DinerPin.placeName,
    coordinates: {
      lat: DinerPin.y,
      lng: DinerPin.x,
    },
  }));
};

const RADIUS = 10;

export const a2dMapper_DinerPinsCriteria_GetDinerPinsRequest = (
  criteria: Action.DinerPinsCriteria
): DTO.GetDinerPinsRequest => {
  return {
    latitude: criteria.lat,
    longitude: criteria.lng,
    radius: RADIUS,
  };
};
