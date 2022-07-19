export const PATH = {
  full: "/",
  fragments: "/",
  LOGIN: {
    full: "/login",
    fragments: "login",
  },
  SIGN_UP: {
    full: "/sign-up",
    fragments: "sign-up",
  },
  ACCOMMODATION: {
    full: "/accommodation",
    fragments: "accommodation",
  },
  MAP: {
    full: "/map",
    fragments: "map",
  },
  CAFE: {
    full: "/cafe",
    fragments: "cafe",

    CAFE_REVIEW: {
      full: "/cafe/review",
      fragments: "review",
    },
  },
  DINER: {
    full: "/diner",
    fragments: "diner",

    DINER_REVIEW: {
      full: "/diner/review",
      fragments: "review",
    },
  },
  WORKER: {
    full: "/worker",
    fragments: "worker",
  },
  WORK_CHAT: {
    full: "/work-chat",
    fragments: "work-chat",
  },
  COMMUNITY: {
    full: "/community",
    fragments: "community",
  },
  MY_PAGE: {
    full: "/my-page",
    fragments: "my-page",
  },
} as const;
