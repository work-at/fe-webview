import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const theme = {
  color: {
    white: "#ffffff",
  },
};

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }
`;
