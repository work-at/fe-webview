export const API_URL = {
  POST_LOIGN: "/auth/token/kakao",
  POST_SIGNUP: "/user/signup",
  GET_VALIDATE_NICKNAME: (params: string) => `/user/validation?nickname=${params}`,
  GET_POSITION_LIST: "/user/job-department",
  GET_WORKING_YEAR_LIST: "/user/job-duration",
  GET_USER_LIST: "/user/self",
  GET_ACCOMMODATION_LIST: "/accommodations",
  GET_ACCOMMODATION_LIST_BY_NAME: "/accommodations/names",
  GET_ACCOMMODATION_DETAIL: (accommodationId: number) => `/accommodations/${accommodationId}`,
  GET_ACCOMMODATION_REVIEW: (accommodationId: number) => `/accommodations/${accommodationId}/reviews`,
  GET_TEST: (params: string) => `/${params}`,
  GET_INFINITE_TEST: (page: number, count: number) => `/something?page=${page}&count=${count}`,
  UPDATE_USER_PROFILE: "/user",
  UPDATE_USER_PROFILE_IMAGE: "/user/image",
  GET_CAFE_REVIEW_LIST: "/cafe/review-type",
  GET_DINER_REVIEW_LIST: "/food/review-type",
  GET_ACCOMMODATION_REVIEW_LIST: "/tags/accommodationReview",
  POST_CAFE_REVIEW: (locationId: string) => `/map/cafes/${locationId}/reviews`,
  POST_DINER_REVIEW: (locationId: string) => `/map/restaurants/${locationId}/reviews`,
  VERIFY_EMAIL: "/user/verify",
  EMAIL_VALIDATION_COUNT_REMAIL: "/user/verify/remaining-attempts",
  GET_CHAT_LIST: "/users/chattings",
  DELETE_CHAT: (roomId: number, lastMessageId: number) => `/chattings/${roomId}?lastMessageId=${lastMessageId}`,
  BLOCK_USER: (roomId: number) => `/chattings/${roomId}`,
  GET_CHAT_MESSAGES: (roomId: number, messageId?: number, sortType?: "AFTER" | "BEFORE") =>
    `/chattings/${roomId}/messages${sortType ? `?sortType=${sortType}` : ""}${
      messageId ? `&messageId=${messageId}` : ""
    }`,
  POST_CHAT_SEND: (roomId: number, message: string) => `/chattings/${roomId}?message=${message}`,
  POST_LAST_MESSAGE: (roomId: number, lastMessageId: number) =>
    `/users/chatting/${roomId}/lastMessage?lastMessageId=${lastMessageId}`,
  POST_CHAT_CONFIRM: (roomId: number) => `/chattings/${roomId}/confirm`,
  POST_CHAT_ROOM_CREATE: (ownerUserId: number) => `/chattings/?ownerUserId=${ownerUserId}`,
  POST_BLOCK_USER: (blockUserId: number) => `/user/blocking?blockUserId=${blockUserId}`,
  GET_REGION_TRAFFIC: (region?: "JEJU" | "SEOUL" | "GANGNEUNG" | "SOKCHO") =>
    `/region-traffic${region ? `?region=${region}` : ""}`,
  POST_USER_REPORT: "reports",
  PUT_USER_LOCATION_TRACKING: "/user/tracking",
  GET_ACCOMMODATION_CURATION: "/accommodations/curations",
};
