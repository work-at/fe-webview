import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import normalize from "styled-normalize";

import App from "@/App";

const container = document.getElementById("root");

if (!container) throw new Error("Failed to find the root element");

const root = createRoot(container);

export const theme = {
  color: {},
};

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }
`;

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Suspense fallback={<div>로딩중...</div>}>
        <App />
      </Suspense>
    </ThemeProvider>
  </QueryClientProvider>
);
