import { lazy } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import NotFound from "./components/@layout/NotFound";
import { paths } from "./constants/paths";
import RootRoute from "./routes/RootRoute";

const AccommodationPage = lazy(() => import("@/pages/AccommodationPage"));
const MapPage = lazy(() => import("@/pages/MapPage"));
const CommunityPage = lazy(() => import("@/pages/CommunityPage"));
const MyPage = lazy(() => import("@/pages/MyPage"));

const BottomNavigationLayout = () => {
  return <Outlet />;
};

const DetailLayout = () => {
  return <Outlet />;
};

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* 어플리케이션 루트 경로 */}
      <Route path={paths.full} element={<RootRoute />} />
      <Route element={<BottomNavigationLayout />}>
        {/* 숙소 페이지 */}
        <Route path={paths.ACCOMMODATION.fragments} element={<AccommodationPage />} />
        {/* 지도 페이지 */}
        <Route path={paths.MAP.fragments} element={<MapPage />} />
        {/* 커뮤니티 페이지 */}
        <Route path={paths.COMMUNITY.fragments} element={<CommunityPage />} />
        {/* 마이페이지 */}
        <Route path={paths.MY_PAGE.fragments} element={<MyPage />} />
      </Route>
      <Route element={<DetailLayout />}>
        {/* 카페 상세 */}
        {/* 숙소 상세 */}
        {/* 워케이셔너 상세 */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
