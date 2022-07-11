import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./ToolBar.styled";
import { Icon } from "@/assets/Icon";

interface ToolBarIconProps {
  // handleRoute: () => void;
  text: string;
  //isActive: boolean;
  icon: React.ReactElement;
}

const ToolBarMenu = ({ /*handleRoute,*/ text, /*isActive,*/ icon }: ToolBarIconProps) => {
  return (
    <S.ListItem>
      <S.ListButton type="button" /*onClick={handleRoute} isActive={isActive}*/>
        <S.MenuIcon>{icon}</S.MenuIcon>
        <S.MenuText>{text}</S.MenuText>
      </S.ListButton>
    </S.ListItem>
  );
};

const TOOLBAR_INFO = [
  { path: "1", text: "숙소", icon: <Icon icon={"Accommodation"} /> },
  { path: "2", text: "지도", icon: <Icon icon={"Map"} /> },
  { path: "3", text: "커뮤니티", icon: <Icon icon={"Community"} /> },
  { path: "4", text: "마이페이지", icon: <Icon icon={"Mypage"} /> },
];

const ToolBar = () => {
  // const { pathname } = useLocation();
  // const navigate  = useNavigate();

  return (
    <S.ToolBar>
      <S.MenuList>
        {TOOLBAR_INFO.map(({ path, text, icon }) => (
          <ToolBarMenu
            key={path}
            text={text}
            //handleRoute={() => navigate(path)}
            //isActive={pathname.includes(path)}
            icon={icon}
          />
        ))}
      </S.MenuList>
    </S.ToolBar>
  );
};

export default ToolBar;
