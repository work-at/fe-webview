import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import { stackflow } from "@stackflow/react";
import MapPage from "./pages/MapPage";
import { PATH } from "./constants";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AccommodationPage from "./pages/AccommodationPage";
import CommunityPage from "./pages/CommunityPage";
import MyPage from "./pages/MyPage";
import CafeDetailPage from "./pages/CafeDetailPage";
import DinerDetailPage from "./pages/DinerDetailPage";
import WorkerDetailPage from "./pages/WorkerDetailPage";
import DinerReviewPage from "./pages/DinerReviewPage";
import StackLayout from "./components/@layout/StackLayout/StackLayout";
import WorkChatPage from "./pages/WorkChatPage";
import CafeReviewPage from "./pages/CafeReviewPage";
import BtnReset from "@/assets/images/icons/BtnReset.svg";

export const Test = () => {
  return <StackLayout appBar={{ title: "TEST", appendRight: () => <BtnReset /> }}>Test</StackLayout>;
};

const activities = {
  LoginPage,
  SignUpPage,
  AccommodationPage,
  MapPage,
  CafeReviewPage,
  CafeDetailPage,
  DinerDetailPage,
  DinerReviewPage,
  WorkerDetailPage,
  CommunityPage,
  WorkChatPage,
  MyPage,
  Test,
};

export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  activities,
  plugins: [
    basicRendererPlugin(),
    historySyncPlugin({
      routes: {
        LoginPage: PATH.LOGIN.full,
        SignUpPage: PATH.SIGN_UP.full,
        /* 숙소 페이지 */
        AccommodationPage: PATH.ACCOMMODATION.full,
        /* 지도 페이지 */
        MapPage: PATH.MAP.full,
        CafeReviewPage: `${PATH.CAFE.CAFE_REVIEW.full}/:cafeId`,
        CafeDetailPage: `${PATH.CAFE.full}/:cafeId`,
        DinerReviewPage: `${PATH.DINER.DINER_REVIEW.full}/:dinerId`,
        DinerDetailPage: `${PATH.DINER.full}/:dinerId`,
        WorkerDetailPage: `${PATH.WORKER.full}/:workerId`,
        /* 커뮤니티 페이지 */
        CommunityPage: PATH.COMMUNITY.full,
        /* 워크챗 페이지 */
        WorkChatPage: `${PATH.WORK_CHAT.full}/:workerId`,
        /* 마이페이지 */
        MyPage: PATH.MY_PAGE.full,
        Test: "/test",
      },
      /* TODO: 404로 교체해야 함 */
      fallbackActivity: () => "AccommodationPage",
    }),
  ],
});
