import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MainTheme } from '../shared/styles';

declare module 'styled-components' {
  type Theme = typeof MainTheme;
  export interface DefaultTheme extends Theme {}
}
