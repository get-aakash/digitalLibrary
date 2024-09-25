import { signOut } from 'firebase/auth'
import React from 'react'
import {  Container, Nav, Navbar } from 'react-bootstrap'
import { auth } from '../../services/firebase'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {

  const navigate= useNavigate()
  const {user} = useSelector(state=>state.user)
  console.log(user.uid)

  async function handleOnLogout(){
   signOut(auth)
   .then(()=>{
    toast.success("Logout successfully")
   })
   .catch((error)=>toast.error(error.message))
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Digital Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">{
            }
            <Link href="#home">SignIn</Link>
            <Link href="#link">SignUp</Link> 
            <Link onClick={handleOnLogout}>SignOut</Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
