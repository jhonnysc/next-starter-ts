/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';
import Theme from './theme';

export type Theme = typeof Theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
