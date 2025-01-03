import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "@/App";
import { GlobalStyle } from "./assets/styles/GlobalStyles";
import "@stackflow/basic-ui/index.css";

const container = document.getElementById("root");

if (!container) throw new Error("Failed to find the root element");

const root = createRoot(container);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
    },
  },
});

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
