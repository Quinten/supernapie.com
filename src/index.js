import styles from "./css/main.less";

console.log('Welcome to Supernapie');
console.log('Play free games here');

import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
