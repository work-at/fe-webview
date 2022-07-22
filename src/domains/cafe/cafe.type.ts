import { IconType } from "@/assets/Icon";
import { PinItem } from "../map.type";

export type CafePin = PinItem;

export type Cafe = {
  id: number;
  imageUrl: string;
  name: string;
  region: string;
  tags: string[];
};

type ReviewPoint = {
  icon: IconType;
  reason: string;
  reviewCount: number;
};

export type CafeDetail = {
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
