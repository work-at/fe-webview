export const API_URL = {
  POST_LOIGN: "/auth/token/kakao",
  POST_SIGNUP: "/user/signup",
  GET_VALIDATE_NICKNAME: (params: string) => `/user/validation?nickname=${params}`,
  GET_POSITION_LIST: "/user/job-department",
  GET_WORKING_YEAR_LIST: "/user/job-duration",
  GET_USER_LIST: "/user/self",
  GET_TEST: (params: string) => `/${params}`,
  GET_INFINITE_TEST: (page: number, count: number) => `/something?page=${page}&count=${count}`,
  UPDATE_USER_PROFILE: "/user",
  GET_CAFE_REVIEW_LIST: "/cafe/review-type",
  GET_DINER_REVIEW_LIST: "/food/review-type",
  POST_CAFE_REVIEW: (locationId: string) => `/map/cafes/${locationId}/reviews`,
  POST_DINER_REVIEW: (locationId: string) => `/map/restaurants/${locationId}/reviews`,
  VERIFY_EMAIL: "/user/verify",
  EMAIL_VALIDATION_COUNT_REMAIL: "/user/verify/remaining-attempts",
  GET_CHAT_LIST: "/users/chattings",
  DELETE_CHAT: (roomId: number) => `/chattings/${roomId}`,
  BLOCK_USER: (roomId: number) => `/chattings/${roomId}`,
  GET_CHAT_MESSAGES: (roomId: number, messageId?: number, sortType?: "AFTER" | "BEFORE") =>
    `/chattings/${roomId}/messages?sortType=${sortType}${messageId ? `&messageId=${messageId}` : ""}`,
  POST_CHAT_SEND: (roomId: number, message: string) => `/chattings/${roomId}?message=${message}`,
  POST_LAST_MESSAGE: (roomId: number, lastMessageId: number) =>
    `/users/chatting/${roomId}/lastMessage?lastMessageId=${lastMessageId}`,
  POST_CHAT_CONFIRM: (roomId: number) => `/chattings/${roomId}/confirm`,
  POST_CHAT_ROOM_CREATE: (ownerUserId: number) => `/chattings/?ownerUserId=${ownerUserId}`,
};
