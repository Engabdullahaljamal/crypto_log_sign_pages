import logo from './logo.svg';
import './App.css';
import SignUpOne from './pages/SignUpOne/SignUpOne'
import SignUpTwo from './pages/SignUpTwo/SignUpTwo'
import React from 'react';
import QRCode from 'react-qr-code';
import crypto_logo from './assets/crypto_logo.jpeg'
import LogIn from './pages/Log_in/LogIn';
import Confirmation from './pages/Confirmation/Confirmation';
import NavBar from './component/NavBar/NavBar';
import EmailVerification from './pages/EmailVerification/EmailVerification';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';


function App() {
  return (
    <div className='App'>
      <NavBar />
      <SignUpOne />
      <SignUpTwo />
      <LogIn />
      <Confirmation />
      <EmailVerification />
      <ForgetPassword />
    </div>
  );
}

export default App;
