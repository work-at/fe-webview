import { LocationDto } from "../map.dto";

export type GetWorkerPinsRequest = {
  latitude: number;
  longitude: number;
  radius: number;
};

export type GetWorkerPinsResponse = {
  locations: LocationDto[];
};
