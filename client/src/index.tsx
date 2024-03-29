import React from 'react';
import ReactDOM from 'react-dom/client'; 
import reportWebVitals from './reportWebVitals';
import Mainpage from './components/MainPage' 


//import "../node_modules/font-awesome/css/font-awesome.min.css"
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css"

import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.js"
 

import './style.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import CurrentPath from './model/CurPath';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
let cpath = new CurrentPath
console.log('root sni')
root.render(
  //<React.StrictMode>
    <BrowserRouter>
      <Routes> 
        <Route path="*" element={<Mainpage pathObject={cpath} />} />
      </Routes> 
    </BrowserRouter>
 // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
