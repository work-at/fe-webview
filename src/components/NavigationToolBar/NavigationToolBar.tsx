import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./NavigationToolBar.styled";
import Icon, { IconType } from "@/assets/Icon";
import { PATH } from "@/constants";

export type ToolBarItem = {
  path: string;
  text: string;
  icon: IconType;
};

interface ToolBarMenuItemProps {
  onRoute: () => void;
  text: string;
  isActive: boolean;
  icon: React.ReactElement;
}

const TOOLBAR_ITEMS: ToolBarItem[] = [
  { path: PATH.ACCOMMODATION.full, text: "숙소", icon: "NaviAccomm" },
  { path: PATH.MAP.full, text: "지도", icon: "NaviMap" },
  { path: PATH.COMMUNITY.full, text: "커뮤니티", icon: "NaviCommunity" },
  { path: PATH.MY_PAGE.full, text: "마이페이지", icon: "NaviMypage" },
];

export const ToolBarMenuItem = ({ onRoute, text, isActive, icon }: ToolBarMenuItemProps) => {
  return (
    <S.ListItem>
      <S.ListButton type="button" onClick={onRoute} isActive={isActive}>
        <S.MenuIcon>{icon}</S.MenuIcon>
        <S.MenuText>{text}</S.MenuText>
      </S.ListButton>
    </S.ListItem>
  );
};

const NavigationToolBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <S.ToolBar>
      <S.MenuList>
        {TOOLBAR_ITEMS.map(({ path, text, icon }) => (
          <ToolBarMenuItem
            key={path}
            text={text}
            onRoute={() => navigate(path)}
            isActive={pathname.includes(path)}
            icon={<Icon icon={icon} />}
          />
        ))}
      </S.MenuList>
    </S.ToolBar>
  );
};

export default NavigationToolBar;
