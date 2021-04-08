import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Effects from './test.js';
import App from './App';
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.Fragment>
    <App />
    <Effects />
  </React.Fragment>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.Fragment>
//      <Hello name="World" />
//      <Hello2 name="World2" />
//   </React.Fragment>
//   document.getElementById('container')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
