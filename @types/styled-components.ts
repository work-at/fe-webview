// @ts-ignore
import { theme } from "../src/index.tsx";

type StyledTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends StyledTheme {}
}
