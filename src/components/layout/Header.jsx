import { signOut } from 'firebase/auth'
import React from 'react'
import {  Container, Nav, Navbar } from 'react-bootstrap'
import { auth } from '../../services/firebase'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate= useNavigate()

  async function handleOnLogout(){
    try {
      const user = await signOut(auth)
      console.log(user)
      toast.success("User Logged out!!")
      navigate("/signupsignin")
      
    } catch (error) {
      toast.error(error.message)
    }
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Digital Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">SignIn</Nav.Link>
            <Nav.Link href="#link">SignUp</Nav.Link> 
            <Nav.Link onClick={handleOnLogout}>SignOut</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
