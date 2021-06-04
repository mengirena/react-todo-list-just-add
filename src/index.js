// Import React, ReactDOM, App component, css, reportWebVitals (used to analyze performance metrics)
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// reportWebVitals is a built-in tool for measuring the real life performance of an app
import reportWebVitals from './reportWebVitals';

// Render App
ReactDOM.render(
  // enable StrictMode to log warnings and enable best practices for writing components
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
