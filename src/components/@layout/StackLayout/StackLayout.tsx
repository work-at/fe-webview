import NavigationToolBar from "@/components/NavigationToolBar/NavigationToolBar";
import { Z_INDEX } from "@/constants/zIndex";
import { AppScreen } from "@stackflow/basic-ui";
import React from "react";
import styled from "styled-components";

type PropOf<T> = T extends React.ComponentType<infer U> ? U : unknown;

interface LayoutProps {
  appBar?: PropOf<typeof AppScreen>["appBar"];
  children: React.ReactNode;
  navigationPath?: "accommodation" | "map" | "community" | "my-page";
  isHide?: boolean;
}

const Container = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: ${Z_INDEX.MIDDLE};
  background-color: white;
`;

interface StyledScrollableProps {
  isNavigation: boolean;
  isHide: boolean;
}

const Scrollable = styled.div<StyledScrollableProps>`
  flex: 1;
  overflow-y: scroll;
  z-index: ${Z_INDEX.MIDDLE};
  ${({ isHide }) => (isHide ? "" : "padding-top: 3.875rem;")};
  ${({ isNavigation }) => (isNavigation ? "padding-bottom: 5.625rem;" : "")}
`;

const StackLayout: React.FC<LayoutProps> = ({ appBar, children, navigationPath, isHide = false }) => {
  const Content = () => (
    <Container>
      <Scrollable isNavigation={!!navigationPath} isHide={isHide}>
        {children}
      </Scrollable>
      {navigationPath && <NavigationToolBar navigationPath={navigationPath} />}
    </Container>
  );

  return (
    <>
      <AppScreen
        theme="cupertino"
        appBar={{
          borderColor: "white",
          ...appBar,
        }}
      >
        {!isHide && <Content />}
      </AppScreen>
      {isHide && <Content />}
    </>
  );
};

export default StackLayout;
