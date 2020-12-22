import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import Header from './components/Header';
import Main from './components/Main';

const App = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <Main />
  </ThemeProvider>
);

export default App;
