import { LocationDto } from "../map.dto";
import { CafeReviewKey } from "./cafe.type";

export type GetCafePinsRequest = {
  latitude: number;
  longitude: number;
  radius: number;
};

export type GetCafePinsResponse = {
  locations: LocationDto[];
};

export type GetCafeReviewTypeResponse = {
  data: {
    response: {
      name: CafeReviewKey;
      content: string;
      iconType: string;
    }[];
  };
};

export type PostCafeReviewRequest = {
  reviewTypeNames: CafeReviewKey[];
  locationId: string;
};
