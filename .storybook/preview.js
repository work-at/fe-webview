import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme, GlobalStyle } from '../src/index'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((Story) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Story />
  </ThemeProvider>
));