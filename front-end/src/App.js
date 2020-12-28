import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import WrapperStyle from './style/WrapperStyle';

const App = () => (
  <ThemeProvider theme={theme.light}>
    <WrapperStyle>
      <h1>Checking the connection of styles</h1>
    </WrapperStyle>
  </ThemeProvider>
);

export default App;
