import { LocationDto } from "../map.dto";

export type GetCafePinsRequest = {
  latitude: number;
  longitude: number;
  page: number;
  radius: number;
};

export type GetCafePinsResponse = {
  locations: LocationDto[];
};
