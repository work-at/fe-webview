// import original module declarations
import "styled-components";
import { DefaultTheme } from 'styled-components';
import { ColorsTypes, FontSizeTypes } from "./theme";

// and extend them!
declare module 'styled-components' {
  // 우리가 아는 타입지정을 여기서 다해주고 불러서 쓰기
export type DefaultTheme = typeof theme;

  // ThemeProvider theme에 적용할 타입으로, theme의 속성과 동일하게 작성
  export interface DefaultTheme {
    colors: ColorsTypes;
    fontSize: FontSizeTypes;
  }
}