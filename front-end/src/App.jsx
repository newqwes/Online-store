import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import Header from './components/Header';
import Home from './components/Home';

const App = () => (
  <ThemeProvider theme={theme.light}>
    <Header />
    <Home />
  </ThemeProvider>
);

export default App;
