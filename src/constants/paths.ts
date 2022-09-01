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
    MAGAZINE: {
      SEOUL: {
        stack: "MagazineSeoul",
        full: "/magazine/seoul",
        fragments: "magazine-seoul",
      },
      GANGWON: {
        stack: "MagazineGangwon",
        full: "/magazine/gangwon",
        fragments: "magazine-gangwon",
      },
      JEJU: {
        stack: "MagazineJeju",
        full: "/magazine/jeju",
        fragments: "magazine-jeju",
      },
    },
    ACCOMMODATION_LIST: {
      stack: "AccommodationList",
      full: "/accommodation/accommodation-list",
      fragments: "accommodation-list",
    },
    ACCOMMODATION_REVIEW: {
      stack: "AccommodationReview",
      full: "/accommodation/accommodation-review",
      fragments: "accommodation-review",
    },
    ACCOMMODATION_DETAIL: {
      stack: "AccommodationDetail",
      full: "/accommodation/accommodation-detail",
      fragments: "accommodation-detail",
    },
    ACCOMMODATION_SEARCH: {
      stack: "AccommodationSearch",
      full: "/accommodation/accommodation-search",
      fragments: "accommodation-search",
    },
    ACCOMMODATION_SEARCH_RESULT: {
      stack: "AccommodationSearchResult",
      full: "/accommodation/accommodation-search-result",
      fragments: "accommodation-search-result",
    },
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
      stack: "CafeReviewPage",
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
    ROOM: {
      stack: "WorkChatRoomPage",
      full: "/work-chat/room",
      fragments: "room",
    },
  },
  MY_PAGE: {
    stack: "MyPage",
    full: "/my-page",
    fragments: "my-page",

    PROFILE_EDIT: {
      stack: "ProfileEdit",
      full: "/my-page/profile-edit",
      fragments: "profile-edit",
    },
    EMAIL_VERIFICATION: {
      stack: "EmailVerification",
      full: "/my-page/email-verification",
      fragments: "email-verification",
    },
    JOB_AND_YEAR_SELECT: {
      stack: "JobAndYearSelect",
      full: "/my-page/job-and-year-select",
      fragments: "job-and-year-select",
    },
    SETTING: {
      stack: "Setting",
      full: "/my-page/setting",
      fragments: "setting",
    },
    CONTACT_US: {
      stack: "ContactUs",
      full: "/my-page/contact-us",
      fragments: "contact-us",
    },
  },
} as const;
