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
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <NavBar />

      <Routes>
        <Route path='/' element={< SignUpOne />} />
        <Route path='/signup_two' element={< SignUpTwo />} />
        <Route path='/login' element={< LogIn />} />
        <Route path='/forget_password' element={< ForgetPassword />} />
        <Route path='/confirmation' element={< Confirmation />} />
        <Route path='/email_verification' element={< EmailVerification />} />


      </Routes>
    </div>
  );
}

export default App;
