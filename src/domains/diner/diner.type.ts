import { PinItem } from "../map.type";

export type DinerPin = PinItem;

export type Diner = {
  id: number;
  name: string;
  imageUrl: string;
  region: string;
  tags: string[];
};

type ReviewPoint = {
  icon: string;
  reason: string;
  reviewCount: number;
};

export type DinerDetail = {
  imageUrl: string;
  name: string;
  address: string;
  phoneNumber: string;
  kakaoLink: string;
  reviewPoints: ReviewPoint[];
  coordinates: {
    lat: number;
    lng: number;
  };
};
