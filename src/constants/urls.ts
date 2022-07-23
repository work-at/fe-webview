export const API_URL = {
  POST_LOIGN: "/auth/token/kakao",
  POST_SIGNUP: "/signup",
  GET_VALIDATE_NICKNAME: (params: string) => `/user/validation?nickname=${params}`,
  GET_POSITION_LIST: "/user/job-department",
  GET_WORKING_YEAR_LIST: "/user/job-duration",
  GET_TEST: (params: string) => `/${params}`,
  GET_INFINITE_TEST: (page: number, count: number) => `/something?page=${page}&count=${count}`,
  UPDATE_TEST: (params: string) => `/${params}`,
  GET_CAFE_REVIEW_LIST: "/cafe/review-type",
  GET_DINER_REVIEW_LIST: "/food/review-type",
  POST_CAFE_REVIEW: (locationId: string) => `/map/cafes/${locationId}/reviews`,
  POST_DINER_REVIEW: (locationId: string) => `/map/restaurants/${locationId}/reviews`,
};
