import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeContextProvider from './component/context/ThemeContext';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);