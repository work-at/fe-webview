import * as DTO from "./diner.dto";
import * as Action from "./diner.action";
import { IconType } from "@/assets/Icon";

export const d2aMapper_GetDinerPinsResponse_DinerPinsInfo = (
  response: DTO.GetDinerPinsResponse
): Action.DinerPinsInfo => {
  return response.data.locations.map((pin) => ({
    id: pin.id,
    coordinates: {
      lat: pin.latitude,
      lng: pin.longitude,
    },
  }));
};

export const a2dMapper_DinerPinsCriteria_GetDinerPinsRequest = (
  criteria: Action.DinerPinsCriteria
): DTO.GetDinerPinsRequest => {
  return {
    latitude: criteria.lat,
    longitude: criteria.lng,
  };
};

export const d2aMapper_GetDinerDetailResponse_DinerDetailInfo = (
  response: DTO.GetDinerDetailResponse
): Action.DinerDetailInfo => {
  return {
    // TODO : 주소 정보 연동
    address: response.data.locationDetail.roadAddressName,
    imageUrl: response.data.locationDetail.fullImageUrl,
    kakaoLink: response.data.locationDetail.placeUrl,
    name: response.data.locationDetail.placeName,
    phoneNumber: response.data.locationDetail.phone,
    reviewPoints: response.data.locationReview.reviews.map((review) => ({
      icon: review.reviewType.name as IconType,
      reason: review.reviewType.content,
      reviewCount: review.count,
    })),
    isReviewed: response.data.locationReview.userReviewed,
    userCount: response.data.locationReview.userCount,
  };
};

export const a2dMapper_DinersCriteria_GetDinersRequest = (criteria: Action.DinersCriteria): DTO.GetDinersRequest => {
  return {
    latitude: criteria.lat,
    longitude: criteria.lng,
  };
};

export const d2aMapper_GetDinersResponse_DinersInfo = (response: DTO.GetDinersResponse): Action.DinersInfo => {
  return response.data.locations.map((diner) => ({
    id: diner.id,
    imageUrl: diner.thumbnailImageUrl,
    name: diner.placeName,
    address: diner.roadAddressName,
    reviewCount: diner.reviewCount,
    tags: diner.topReviews.map((review) => review.content),
  }));
};
