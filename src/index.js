import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Jornais from './jornais/jornais'

ReactDOM.render(
  <React.StrictMode>
    <Jornais />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
