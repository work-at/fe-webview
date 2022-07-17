import { lazy, Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { PATH } from "./constants/paths";
import CafeDetailPage from "./pages/CafeDetailPage";
import CafeReviewPage from "./pages/CafeReviewPage";
import DinerDetailPage from "./pages/DinerDetailPage";
import DinerReviewPage from "./pages/DinerReviewPage";
import WorkChatPage from "./pages/WorkChatPage";
import WorkerDetailPage from "./pages/WorkerDetailPage";
import RootRoute from "./routes/RootRoute";

const LoginPage = lazy(() => import("@/pages/LoginPage"));
const SignUpPage = lazy(() => import("@/pages/SignUpPage"));
const AccommodationPage = lazy(() => import("@/pages/AccommodationPage"));
const MapPage = lazy(() => import("@/pages/MapPage"));
const CommunityPage = lazy(() => import("@/pages/CommunityPage"));
const MyPage = lazy(() => import("@/pages/MyPage"));

const BottomNavigationLayout = () => {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <Outlet />
    </Suspense>
  );
};

// TODO : 레이아웃 용 컴포넌트는 따로 빼기
const DetailLayout = () => {
  return <Outlet />;
};

const ChatLayout = () => {
  return <Outlet />;
};

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* 어플리케이션 루트 경로 */}
      <Route path={PATH.full} element={<RootRoute />} />
      <Route path={PATH.LOGIN.fragments} element={<LoginPage />} />
      <Route path={PATH.SIGN_UP.fragments} element={<SignUpPage />} />
      <Route element={<BottomNavigationLayout />}>
        {/* 숙소 페이지 */}
        <Route path={PATH.ACCOMMODATION.fragments} element={<AccommodationPage />} />
        {/* 지도 페이지 */}
        <Route path={PATH.MAP.fragments} element={<MapPage />} />
        {/* 커뮤니티 페이지 */}
        <Route path={PATH.COMMUNITY.fragments} element={<CommunityPage />} />
        {/* 마이페이지 */}
        <Route path={PATH.MY_PAGE.fragments} element={<MyPage />} />
      </Route>
      <Route element={<DetailLayout />}>
        <Route path={PATH.CAFE.full}>
          <Route path={PATH.CAFE.CAFE_REVIEW.fragments}>
            <Route path=":cafeId" element={<CafeReviewPage />} />
          </Route>
          <Route path=":cafeId" element={<CafeDetailPage />} />
        </Route>
        <Route path={PATH.DINER.full}>
          <Route path={PATH.DINER.DINER_REVIEW.fragments}>
            <Route path=":dinerId" element={<DinerReviewPage />} />
          </Route>
          <Route path=":dinerId" element={<DinerDetailPage />} />
        </Route>

        <Route path={PATH.WORKER.full}>
          <Route path=":workerId" element={<WorkerDetailPage />} />
        </Route>
        {/* 카페 상세 */}
        {/* 숙소 상세 */}
        {/* 워케이셔너 상세 */}
      </Route>
      <Route element={<ChatLayout />}>
        <Route path={PATH.WORK_CHAT.full}>
          <Route path=":workerId" element={<WorkChatPage />} />
        </Route>
      </Route>
      <Route path="*" element={<div>경로를 찾을 수 없습니다.</div>} />
    </Routes>
  </BrowserRouter>
);

export default App;
