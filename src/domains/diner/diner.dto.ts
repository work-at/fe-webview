import { AxiosResponse } from "axios";
import { DinerReviewKey } from "./diner.type";

export type GetDinerPinsRequest = {
  latitude: number;
  longitude: number;
  radius?: number;
};

type DinerPin = {
  id: number;
  latitude: number;
  longitude: number;
  placeId: string;
};

type topReview = {
  name: string;
  content: string;
};

export type GetDinerPinsResponse = AxiosResponse<{ locations: DinerPin[] }>;

export type GetDinersRequest = {
  latitude: number;
  longitude: number;
};

type Diner = {
  category: "RESTAURANT";
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
  topReviews: topReview[];
};

export type GetDinersResponse = AxiosResponse<{ locations: Diner[] }>;

type Review = {
  count: number;
  reviewType: {
    content: string;
    name: string;
  };
};

export type GetDinerDetailResponse = AxiosResponse<{
  locationDetail: {
    category: "RESTAURANT";
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
    userCount: number;
  };
}>;

type ReviewTypeItem = {
  name: DinerReviewKey;
  content: string;
  iconType: string;
};

export type GetDinerReviewTypeResponse = AxiosResponse<{ tags: ReviewTypeItem[] }>;

export type PostDinerReviewRequest = {
  reviewTypeNames: DinerReviewKey[];
  locationId: string;
};
