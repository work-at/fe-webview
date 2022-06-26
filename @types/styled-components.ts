import { theme } from "../src/AppStyle";

type StyledTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends StyledTheme {}
}
