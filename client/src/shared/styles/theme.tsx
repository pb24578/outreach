import React from 'react';
import { ThemeProvider } from 'styled-components';

export const MainTheme = {
  colors: {
    primary: '#28acde',
    secondary: '#ffffff',
    teritary: '#FFAD25',
    quaternary: '#282c2f',
  },
};

interface ThemeProps {
  children?: any;
}

const Theme = (props: ThemeProps) => {
  const { children } = props;
  return <ThemeProvider theme={MainTheme}>{children}</ThemeProvider>;
};

export default Theme;
