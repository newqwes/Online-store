import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import Menu from './style/WrapperStyle';

const App = () => (
  <ThemeProvider theme={theme.light}>
    <Menu>
      <h1>Hello world</h1>
    </Menu>
  </ThemeProvider>
);
export default App;
