import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Jornais from './jornais/jornais'
// import Datas from './datas/datas'

ReactDOM.render(
  <React.StrictMode>
    <Jornais />
    <App />
    {/*<Datas />*/}
  </React.StrictMode>,
  document.getElementById('root')
);
