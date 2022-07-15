import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));


const hasmetamask = window.ethereum;
if(hasmetamask){
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>)
} else {
  root.render(<center><h1>🚨 Please install metamask 🦊 extension and reload</h1></center>)
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
