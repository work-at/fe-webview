import { lazy, Suspense } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { PATH } from "./constants/paths";
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

const DetailLayout = () => {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <Outlet />
    </Suspense>
  );
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
        {/* 카페 상세 */}
        {/* 숙소 상세 */}
        {/* 워케이셔너 상세 */}
      </Route>
      <Route path="*" element={<div>경로를 찾을 수 없습니다.</div>} />
    </Routes>
  </BrowserRouter>
);

export default App;
