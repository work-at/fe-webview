import NavigationToolBar from "@/components/NavigationToolBar/NavigationToolBar";
import { AppScreen, cssVars } from "@stackflow/basic-ui";
import React from "react";
import styled from "styled-components";

type PropOf<T> = T extends React.ComponentType<infer U> ? U : unknown;

interface LayoutProps {
  appBar?: PropOf<typeof AppScreen>["appBar"];
  children: React.ReactNode;
  navigationPath?: "accommodation" | "map" | "community" | "my-page";
}

const Container = styled.main`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

interface StyledScrollableProps {
  isNavigation: boolean;
}
const Scrollable = styled.div<StyledScrollableProps>`
  flex: 1;
  overflow-y: scroll;
  padding-top: ${cssVars.appBar.height};
  ${({ isNavigation }) => (isNavigation ? "padding-bottom: 83px" : "")}
`;

const StackLayout: React.FC<LayoutProps> = ({ appBar, children, navigationPath }) => {
  return (
    <AppScreen
      theme="cupertino"
      appBar={{
        borderColor: "white",
        ...appBar,
      }}
    >
      <Container>
        <Scrollable isNavigation={!!navigationPath}>{children}</Scrollable>
        {navigationPath && <NavigationToolBar navigationPath={navigationPath} />}
      </Container>
    </AppScreen>
  );
};

export default StackLayout;
