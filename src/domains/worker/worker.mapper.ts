import * as DTO from "./worker.dto";
import * as Action from "./worker.action";

export const d2aMapper_GetWorkerPinsResponse_WorkerPinsInfo = (
  response: DTO.GetWorkerPinsResponse
): Action.WorkerPinsInfo => {
  return response.locations.map((WorkerPin) => ({
    id: WorkerPin.id,
    name: WorkerPin.placeName,
    coordinates: {
      lat: WorkerPin.y,
      lng: WorkerPin.x,
    },
  }));
};

const RADIUS = 10;

export const a2dMapper_WorkerPinsCriteria_GetWorkerPinsRequest = (
  criteria: Action.WorkerPinsCriteria
): DTO.GetWorkerPinsRequest => {
  return {
    latitude: criteria.lat,
    longitude: criteria.lng,
    radius: RADIUS,
  };
};
