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
  region: AccommodationRegion;
};

export type GetAccommodationListRequest = {
  region?: AccommodationRegion;
  infoTagName?: AccommodationInfoTag;
  pageSize?: number;
  topReviewTagName?: AccommodationReviewTag;
};

export type GetAccommodationListByNameRequest = {
  accommodationName: string;
};

export type GetAccommodationListResponse = AxiosResponse<{
  accommodations: Accommodation[];
}>;

export type GetAccommodationListByNameResponse = AxiosResponse<Accommodation[]>;

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

export type RegionTrafficRequest = {
  region?: "JEJU" | "SEOUL" | "GANGNEUNG" | "SOKCHO";
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

type ReviewTypeItem = {
  name: AccommodationReviewTag;
  content: string;
  content2: string;
  content3: string;
};

export type GetAccommodationReviewTypeResponse = AxiosResponse<{ tags: ReviewTypeItem[] }>;
