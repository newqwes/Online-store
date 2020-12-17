import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import Header from './components/Header';

const App = () => (
  <ThemeProvider theme={theme}>
    <Header />
  </ThemeProvider>
);

export default App;
