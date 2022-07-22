import { LocationDto } from "../map.dto";
import { DinerReviewKey } from "./diner.type";

export type GetDinerPinsRequest = {
  latitude: number;
  longitude: number;
  page: number;
  radius: number;
};

export type GetDinerPinsResponse = {
  locations: LocationDto[];
};

export type GetDinerReviewTypeResponse = {
  data: {
    response: {
      name: DinerReviewKey;
      content: string;
      iconType: string;
    }[];
  };
};

export type PostDinerReviewRequest = {
  reviewTypeNames: DinerReviewKey[];
  locationId: string;
};
