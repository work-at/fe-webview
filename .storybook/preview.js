import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { theme, GlobalStyle } from "../src/AppStyle";

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
