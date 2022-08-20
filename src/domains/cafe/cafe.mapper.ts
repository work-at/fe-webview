import * as DTO from "./cafe.dto";
import * as Action from "./cafe.action";
import { MAP } from "@/constants/map";
import { IconType } from "@/assets/Icon";

export const d2aMapper_GetCafePinsResponse_CafePinsInfo = (response: DTO.GetCafePinsResponse): Action.CafePinsInfo => {
  return response.data.locations.map((cafePin) => ({
    id: cafePin.id,
    coordinates: {
      lat: cafePin.latitude,
      lng: cafePin.longitude,
    },
  }));
};

export const a2dMapper_CafePinsCriteria_GetCafePinsRequest = (
  criteria: Action.CafePinsCriteria
): DTO.GetCafePinsRequest => {
  return {
    latitude: criteria.lat,
    longitude: criteria.lng,
    // radius: MAP.SearchRadius,
  } as any;
};

export const d2aMapper_GetCafeDetailResponse_CafeDetailInfo = (
  response: DTO.GetCafeDetailResponse
): Action.CafeDetailInfo => {
  return {
    // TODO : 주소 정보 연동
    address: response.data.locationDetail.roadAddressName,
    imageUrl: response.data.locationDetail.fullImageUrl,
    kakaoLink: response.data.locationDetail.placeUrl,
    name: response.data.locationDetail.placeName,
    phoneNumber: response.data.locationDetail.phone,
    reviewPoints: response.data.locationReview.reviews.map((review) => ({
      icon: review.reviewType.iconType as IconType,
      reason: review.reviewType.content,
      reviewCount: review.count,
    })),
    isReviewed: response.data.locationReview.userReviewed,
  };
};

export const a2dMapper_CafesCriteria_GetCafesRequest = (criteria: Action.CafesCriteria): DTO.GetCafesRequest => {
  return {
    latitude: criteria.lat,
    longitude: criteria.lng,
    // radius: MAP.SearchRadius,
  } as any;
};

export const d2aMapper_GetCafesResponse_CafesInfo = (response: DTO.GetCafesResponse): Action.CafesInfo => {
  return response.data.locations.map((cafe) => ({
    id: cafe.id,
    imageUrl: cafe.thumbnailImageUrl,
    name: cafe.placeName,
    address: cafe.roadAddressName,
    reviewCount: 0,
    // TODO : 태그 정보 연동하기
    tags: [],
  }));
};
