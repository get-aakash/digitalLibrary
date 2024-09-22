import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css';
import SignUpSignIn from './components/auth/SignUpSignIn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signupsignin" element={<SignUpSignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
    
  )
}

export default App
