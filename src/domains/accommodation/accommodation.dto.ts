import { AxiosResponse } from "axios";
import { ACCOMMODATION_REGIONS, INFO_TAG_NAMES, REVIEW_TAG_NAMES } from "./accommodation.constant";

export type AccommodationRegion = typeof ACCOMMODATION_REGIONS[number];

export type AccommodationInfoTag = typeof INFO_TAG_NAMES[number];

export type AccommodationReviewTag = typeof REVIEW_TAG_NAMES[number];

type InfoTagItem = { name: AccommodationInfoTag; content: string };
type ReviewTagItem = { name: AccommodationReviewTag; content: string };

export type Accommodation = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  infoTags: InfoTagItem[];
  topReviewTags: ReviewTagItem[];
};

export type GetAccommodationListRequest = {
  region?: AccommodationRegion;
  infoTag?: AccommodationInfoTag;
  topReviewTag?: AccommodationReviewTag;
};

export type GetAccommodationListResponse = AxiosResponse<{
  accommodations: Accommodation[];
}>;

export type AccommodationTag = {
  content: string;
  name: AccommodationReviewTag;
};

export type GetAccommodationTagsResponse = {
  tags: AccommodationTag[];
};

export type PostAccommodationReviewRequest = {
  tagNames: AccommodationTag["name"];
};

export type GetAccommodationDetailRequest = {
  accommodationId: number;
};

type AccommodationDetailReviewTag = {
  count: number;
  tag: ReviewTagItem;
};

export type GetAccommodationDetailResponse = {
  data: {
    accommodationDetail: {
      id: number;
      name: string;
      imgUrl: string;
      price: number;
      phone: string;
      roadAddressName: string;
      placeUrl: string;
      relatedUrl: string;
      infoTags: InfoTagItem[];
    };
    accommodationReview: {
      reviews: AccommodationDetailReviewTag[];
      userReviewed: boolean;
      userCount: number;
    };
  };
};

export type RegionTrafficResponse = {
  data: {
    region: "JEJU" | "SEOUL" | "GANGNEUNG" | "SOKCHO";
    type: "POPULAR" | "IN_BETWEEN" | "FREE";
    message: "완전핫함" | "핫플직전" | "한산해요";
  };
};

export type AccommodationCurationResponse = {
  data: {
    accommodations: [
      {
        id: number;
        name: string;
        region: string;
        imgUrl: string;
      }
    ];
  };
};
