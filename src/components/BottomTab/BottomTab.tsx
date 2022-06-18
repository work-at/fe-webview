import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./BottomTab.styled";
import Like from "@/assets/like.svg";

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
  { path: "like1", text: "좋아요", icon: <Like /> },
  { path: "like2", text: "좋아요", icon: <Like /> },
  { path: "like3", text: "좋아요", icon: <Like /> },
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
