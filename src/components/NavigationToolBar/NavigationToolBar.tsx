import * as S from "./NavigationToolBar.styled";
import Icon, { IconType } from "@/assets/Icon";
import { PATH } from "@/constants";
import { useFlow } from "@/stack";

export type ToolBarItem = {
  path: string;
  stack: "AccommodationPage" | "MapPage" | "CommunityPage" | "MyPage";
  text: string;
  icon: IconType;
};

interface ToolBarMenuItemProps {
  onRoute: () => void;
  text: string;
  isActive: boolean;
  icon: React.ReactElement;
}

interface NavigationToolBarProps {
  navigationPath: "accommodation" | "map" | "community" | "my-page";
}

const TOOLBAR_ITEMS: ToolBarItem[] = [
  { path: PATH.ACCOMMODATION.full, stack: PATH.ACCOMMODATION.stack, text: "숙소", icon: "Accommodation" },
  { path: PATH.MAP.full, stack: PATH.MAP.stack, text: "지도", icon: "Map" },
  { path: PATH.COMMUNITY.full, stack: PATH.COMMUNITY.stack, text: "커뮤니티", icon: "Community" },
  { path: PATH.MY_PAGE.full, stack: PATH.MY_PAGE.stack, text: "마이페이지", icon: "Mypage" },
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

const NavigationToolBar = ({ navigationPath }: NavigationToolBarProps) => {
  const { replace } = useFlow();

  return (
    <S.ToolBar>
      <S.MenuList>
        {TOOLBAR_ITEMS.map(({ path, stack, text, icon }) => (
          <ToolBarMenuItem
            key={path}
            text={text}
            onRoute={() => replace(stack, {}, { animate: false })}
            isActive={path.includes(navigationPath)}
            icon={<Icon icon={icon} />}
          />
        ))}
      </S.MenuList>
    </S.ToolBar>
  );
};

export default NavigationToolBar;
