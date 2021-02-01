import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

export const Wrapper = styled.div`
  font-size: 1.25em;
  & h3 {
    color: ${(props) => props.theme.colors.secondary};
  }
`;
