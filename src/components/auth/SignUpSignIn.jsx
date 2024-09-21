import React, { useState } from 'react'
import './signupsignin.css'
import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import background_image from '../../assets/background.jpg'
import { Button } from 'react-bootstrap'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../services/firebase'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const SignUpSignIn = () => {
  const [action, setAction] = useState("Sign In")
  const [formData, setFormData] = useState({})
  const navigate = useNavigate()

  function handleOnChange(e) {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

  }
  async function handleOnSubmit (e) {
    e.preventDefault()
    if(action === "Sign Up"){
      if (formData.password !== formData.confirmPassword) {
        toast.error("Your passwords do not match");
        return;
      }
      try {
        const user = await createUserWithEmailAndPassword(auth, formData.email, formData.password)
        if(user?.uid){
          toast.success("User created successfully!!")
          navigate("/")
        }
        
      } catch (error) {
        toast.error(error.message)
      }
     

    }
    else{
      
      try {
       const {user} = await signInWithEmailAndPassword(auth, formData.email, formData.password)
       console.log(user.uid)
       if(user?.uid){
        console.log("helli")
        toast.success("User created successfully!!")
        navigate("/")
      }
        
      } catch (error) {
        toast.error(error.message)
        
      }
    }
    
  }

  return (
    <div className='signup-container'>

      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <form action="" onSubmit={handleOnSubmit}>
        <div className="inputs">
          {action === "Sign In" ? <div></div> : <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" name='name' placeholder='Name' onChange={handleOnChange} />
          </div>}

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" name='email' placeholder='Email' onChange={handleOnChange} />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" name='password' placeholder='Password' onChange={handleOnChange} />
          </div>
          {action === "Sign Up"? <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" name='confirmPassword' placeholder='Confirm Password' onChange={handleOnChange} />
          </div>:<div></div>}
         
          <Button type="submit" variant="light">{action}</Button>
        </div>


      </form>

      {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password? <span>Click here</span></div>}

      <div className="submit-container">
        <div className={action === "Sign In" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
        <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Sign In") }}>Sign In</div>
      </div>
    </div>
  )
}

export default SignUpSignIn
