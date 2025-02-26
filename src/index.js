import React from 'react';
import ReactDOM from 'react-dom/client';
import Tictactoe from './tictactoe';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tictactoe />
  </React.StrictMode>
);

reportWebVitals();
