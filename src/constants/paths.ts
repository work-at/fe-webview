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
    CAFE: {
      full: "/map/cafe",
      fragments: "cafe",
    },
    DINER: {
      full: "/map/diner",
      fragments: "diner",
    },
    WORKER: {
      full: "/map/worker",
      fragments: "worker",
    },
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
