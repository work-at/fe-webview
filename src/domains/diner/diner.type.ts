import { IconType } from "@/assets/Icon";
import { PinItem } from "../map.type";

export type DinerPin = PinItem;

export type Diner = {
  id: number;
  name: string;
  imageUrl: string;
  address: string;
  reviewCount: number;
  tags: string[];
};

type ReviewPoint = {
  icon: IconType;
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
  isReviewed: boolean;
};

export type DinerReviewKey =
  | "QUICK_FOOD"
  | "EAT_ALONE"
  | "MUST_GO"
  | "QUIET"
  | "SNACK"
  | "VIEW"
  | "COST"
  | "PARKING"
  | "SPACE"
  | "NOT_CROWDED";
