import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import { GlobalStyle } from './GlobalStyle';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>
);

