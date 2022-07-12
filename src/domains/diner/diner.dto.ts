import { LocationDto } from "../map.dto";

export type GetDinerPinsRequest = {
  latitude: number;
  longitude: number;
  page: number;
  radius: number;
};

export type GetDinerPinsResponse = {
  locations: LocationDto[];
};
