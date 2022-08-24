import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import { stackflow, StackflowReactPlugin } from "@stackflow/react";
import MapPage from "./pages/MapPage";
import { ACCESS_TOKEN, PATH } from "./constants";
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
import ProfileEdit from "./components/my-page/ProfileEdit";
import EmailVerification from "./components/my-page/EmailVerification";
import JobAndYearSelect from "./components/my-page/JobAndYearSelect";
import Setting from "./components/my-page/Setting";
import WorkChatRoomPage from "./pages/WorkChatRoomPage";
import ContactUs from "./components/my-page/ContactUs";

import { DispatchEvent, id } from "@stackflow/core";
import { requestGetUserInfoBase } from "./domains/user";

export const Test = () => {
  return <StackLayout appBar={{ title: "TEST" }}>Test</StackLayout>;
};

export const Copyright = () => {
  return (
    <StackLayout isHide>
      <div>앱 &#39;Work at_&#39; (com.workat_)의 소유자와 이 웹사이트의 소유자가 동일하다는 것을 증명합니다.</div>
      <br />
      <div>This text evidences that same person(owner) has copyright about app(com.workat_) and this site.</div>
    </StackLayout>
  );
};

const SECOND = 1000;
const MINUTE = 60 * SECOND;

let isLogin = false;
let isDirty = false;

const checkAuthStatus = async (dispatchEvent: DispatchEvent) => {
  if (window.location.pathname.includes("copyright")) {
    return;
  }

  const TOKEN = sessionStorage.getItem(ACCESS_TOKEN);

  if ((TOKEN && isLogin) || isDirty) {
    return;
  }

  try {
    await requestGetUserInfoBase();
    isLogin = true;
  } catch {
    isLogin = false;
    const activityId = id();

    return dispatchEvent("Replaced", {
      activityId,
      activityName: PATH.LOGIN.stack,
      params: {},
      eventDate: new Date().getTime() - MINUTE,
    });
  } finally {
    isDirty = true;
  }
};

export function routeCallback(): StackflowReactPlugin {
  return () => ({
    key: "routeCallback",
    async onChanged({ actions: { dispatchEvent } }) {
      checkAuthStatus(dispatchEvent);
    },
    async onInit({ actions: { dispatchEvent } }) {
      checkAuthStatus(dispatchEvent);
    },
  });
}

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
  WorkChatRoomPage,
  MyPage,
  ProfileEdit,
  EmailVerification,
  JobAndYearSelect,
  Setting,
  ContactUs,
  Test,
  Copyright,
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
        /* 워크챗 페이지 */
        WorkChatPage: `${PATH.WORK_CHAT.full}`,
        WorkChatRoomPage: `${PATH.WORK_CHAT.ROOM.full}/:workerId`,
        /* 마이페이지 */
        MyPage: PATH.MY_PAGE.full,
        ProfileEdit: PATH.MY_PAGE.PROFILE_EDIT.full,
        EmailVerification: PATH.MY_PAGE.EMAIL_VERIFICATION.full,
        JobAndYearSelect: PATH.MY_PAGE.JOB_AND_YEAR_SELECT.full,
        Setting: PATH.MY_PAGE.SETTING.full,
        ContactUs: PATH.MY_PAGE.CONTACT_US.full,
        Test: "/test",
        Copyright: "/copyright",
      },
      /* TODO: 404로 교체해야 함 */
      fallbackActivity: () => PATH.LOGIN.stack,
    }),
    routeCallback(),
  ],
});
