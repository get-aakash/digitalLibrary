import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css';
import SignUpSignIn from './components/auth/SignUpSignIn';

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUpSignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
