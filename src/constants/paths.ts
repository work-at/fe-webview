export const PATH = {
  full: "/",
  fragments: "/",
  LOGIN: {
    stack: "LoginPage",
    full: "/login",
    fragments: "login",
  },
  SIGN_UP: {
    stack: "SignUpPage",
    full: "/sign-up",
    fragments: "sign-up",
  },
  ACCOMMODATION: {
    stack: "AccommodationPage",
    full: "/accommodation",
    fragments: "accommodation",
  },
  MAP: {
    stack: "MapPage",
    full: "/map",
    fragments: "map",
  },
  CAFE: {
    stack: "CafeDetailPage",
    full: "/cafe",
    fragments: "cafe",

    CAFE_REVIEW: {
      stack: "CafeDetailPage",
      full: "/cafe/review",
      fragments: "review",
    },
  },
  DINER: {
    stack: "DinerDetailPage",
    full: "/diner",
    fragments: "diner",

    DINER_REVIEW: {
      stack: "DinerReviewPage",
      full: "/diner/review",
      fragments: "review",
    },
  },
  WORKER: {
    stack: "WorkerDetailPage",
    full: "/worker",
    fragments: "worker",
  },
  WORK_CHAT: {
    stack: "WorkChatPage",
    full: "/work-chat",
    fragments: "work-chat",
  },
  COMMUNITY: {
    stack: "CommunityPage",
    full: "/community",
    fragments: "community",
  },
  MY_PAGE: {
    stack: "MyPage",
    full: "/my-page",
    fragments: "my-page",
  },
} as const;
