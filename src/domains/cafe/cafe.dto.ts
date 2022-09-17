import { AxiosResponse } from "axios";
import { CafeReviewKey } from "./cafe.type";

export type GetCafePinsRequest = {
  latitude: number;
  longitude: number;
  radius?: number;
};

type CafePin = {
  id: number;
  latitude: number;
  longitude: number;
  placeId: string;
};

export type GetCafePinsResponse = AxiosResponse<{
  locations: CafePin[];
}>;

export type GetCafesRequest = {
  latitude: number;
  longitude: number;
  radius?: number;
};

type TopReview = {
  name: string;
  content: string;
};

type Cafe = {
  category: "CAFE";
  fullImageUrl: string;
  id: number;
  latitude: number;
  longitude: number;
  phone: string;
  placeId: string;
  placeName: string;
  placeUrl: string;
  thumbnailImageUrl: string;
  roadAddressName: string;
  reviewCount: number;
  topReviews: TopReview[];
};

export type GetCafesResponse = AxiosResponse<{ locations: Cafe[] }>;

type Review = {
  count: number;
  reviewType: {
    content: string;
    name: string;
  };
};

export type GetCafeDetailResponse = AxiosResponse<{
  locationDetail: {
    category: "CAFE";
    fullImageUrl: string;
    id: number;
    latitude: number;
    longitude: number;
    phone: string;
    placeId: string;
    placeName: string;
    placeUrl: string;
    thumbnailImageUrl: string;
    roadAddressName: string;
  };
  locationReview: {
    reviews: Review[];
    userReviewed: boolean;
  };
}>;

type ReviewTypeItem = {
  name: CafeReviewKey;
  content: string;
  content2: string;
};

export type GetCafeReviewTypeResponse = AxiosResponse<{ response: ReviewTypeItem[] }>;

export type PostCafeReviewRequest = {
  reviewTypeNames: CafeReviewKey[];
  locationId: string;
};
