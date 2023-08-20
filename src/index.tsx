import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/global.css';
// import App from './App';
import SignUp from './pages/SignIn/signUp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>
);

