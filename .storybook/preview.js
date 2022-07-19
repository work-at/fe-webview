import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../src/assets/styles/GlobalStyles";
import { theme } from "../src/assets/styles/theme";
import { BrowserRouter } from "react-router-dom";

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

addDecorator((Story) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  </BrowserRouter>
));
