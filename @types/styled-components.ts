import { theme } from "../src/index";

type StyledTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends StyledTheme {}
}
