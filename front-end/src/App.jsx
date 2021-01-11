import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import Header from './components/Header';
import Main from './components/Main';
import ProductSection from './components/ProductSection';

const App = () => (
  <ThemeProvider theme={theme}>
    <Header />
    <Main />
    <ProductSection />
  </ThemeProvider>
);

export default App;
