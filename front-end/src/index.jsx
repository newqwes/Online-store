import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App.jsx';
import GlobalStyle from './style/GlobalStyle.js';
import theme from './style/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      <Router>
        <Route path='/' component={App} />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
