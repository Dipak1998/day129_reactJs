import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const fname = "Dipak";
const lname = "Garai";
const currentTime = new Date().toLocaleTimeString();
const currentDate = new Date().toLocaleDateString();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // <>
  //   {/* <h1> Welcome to Codethunder</h1>
  //   <p>Hi, {fname +" " + lname}</p>
  //   <p>Hi, {`${fname} ${lname}`}</p> */}

  //   {/* print your name */}
  //   <h1 style={{color : "green"}}>Dipak Garai</h1>
  //   {/* print the current date */}
  //   <p>Current Date is : {currentDate}</p>
  //   {/* print the current time  */}
  //   <p>Current Time : {currentTime}</p>
  // </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
