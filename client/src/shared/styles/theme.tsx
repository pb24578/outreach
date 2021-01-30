import React from 'react';
import { ThemeProvider } from 'styled-components';

export const MainTheme = {
  colors: {
    primary: '#071013',
    secondary: '#EDF060',
    teritary: '#FFFFFF',
    quaternary: '#ADB6C4',
    quinary: '#C97064',
    senary: '#4D2D2F',
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
