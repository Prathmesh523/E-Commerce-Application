import { useState } from 'react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../index.css'
import Navbar from '../components/Navbar'

export default function Register() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = async (e) => {
    e.preventDefault()
    if (username.length === 0 || email.length === 0 || password.length === 0) {
      console.log("All fields are mandatory")
    }
    else if (username.length < 3) {
      console.log("Username must be more than 2 characters")
    }
    else if (password.length < 8) {
      console.log("Password must be more than 7 characters")
    }
    else {
      const data = await axios.post('http://localhost:5000/users/register', [username, email, password])

      if (data.data.status) {
        navigate("/login")
      }

    }
  }

  return (
    <>
      <Navbar />
      <div className='bottom-container'>
        <div className="form-container">
          <div className="form-container-details">
            <div className="form-container-title">
              Shopify
            </div>
            <div className="form-container-subtitle">
              Registration
            </div>
          </div>
          <form className='form' onSubmit={submit}>
            <div className="form-field">
              <input className='form-input' type='text' placeholder='Username' name='username' onChange={e => setUsername(e.target.value)} />
            </div>
            <div className="form-field">
              <input className='form-input' type="email" placeholder='Email' name='email' onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-field">
              <input className='form-input' type="password" placeholder='Password' name='password' onChange={e => setPassword(e.target.value)} />
            </div>

            <button className='form-submit' type='submit'>Register</button>
          </form>
          <div className="form-container-links">
            <span className='form-container-link'>Already Registered? <Link to="/login">Login</Link></span>
          </div>
        </div>
      </div>
    </>


  )
}
