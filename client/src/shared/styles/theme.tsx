import React from 'react';
import { ThemeProvider } from 'styled-components';

export const MainTheme = {
  colors: {
    primary: '#071013',
    seconday: '#EDF060',
    teritary: '#ADB6C4',
    quaternary: '#C97064',
    quinary: '#4D2D2F',
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
