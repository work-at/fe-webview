import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./BottomTab.styled";
import Accommodation from "@/assets/accommodation.svg";
import Map from "@/assets/map.svg";
import Community from "@/assets/community.svg";
import Mypage from "@/assets/mypage.svg";

interface TabIconProps {
  handleRoute: () => void;
  text: string;
  isActive: boolean;
  icon: React.ReactElement;
}

const TabIcon = ({ handleRoute, text, isActive, icon }: TabIconProps) => {
  return (
    <S.Item>
      <S.Button type="button" onClick={handleRoute} isActive={isActive}>
        <div className="icon">{icon}</div>
        <span>{text}</span>
      </S.Button>
    </S.Item>
  );
};

const TAB_INFO = [
  { path: "accommodation", text: "숙소", icon: <Accommodation /> },
  { path: "map", text: "지도", icon: <Map /> },
  { path: "community", text: "커뮤니티", icon: <Community /> },
  { path: "mypage", text: "마이페이지", icon: <Mypage /> },
];

const BottomTab = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <S.Container>
      {TAB_INFO.map(({ path, text, icon }) => (
        <TabIcon
          key={path}
          text={text}
          handleRoute={() => navigate(path)}
          isActive={pathname.includes(path)}
          icon={icon}
        />
      ))}
    </S.Container>
  );
};

export default BottomTab;
