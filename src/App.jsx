import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css';
import SignUpSignIn from './components/auth/SignUpSignIn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/auth/PrivateRoute';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from './store/userSlice';
import { auth } from './services/firebase';

const App = () => {
  const dispatch = useDispatch()
  onAuthStateChanged(auth,(user)=>{
    const obj = {
      uid: user?.uid,
      email: user?.email,
      displayName: user?.displayName
    }
    dispatch(addUser(obj))
  })
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signupsignin" element={
          
            <SignUpSignIn />

         
          } />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
      <ToastContainer />
    </BrowserRouter>

  )
}

export default App
