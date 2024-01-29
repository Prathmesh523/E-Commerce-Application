import { useState } from 'react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../index.css'
import Navbar from '../components/Navbar'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = async (e) => {
    e.preventDefault()
    if (email.length === 0 || password.length === 0) {
      console.log("All fields are mandatory")
    }
    else if (email.length < 3) {
      console.log("Username must be more than 2 characters")
    }
    else if (password.length < 8) {
      console.log("Password must be more than 7 characters")
    }
    else {
      const data = await axios.post('http://localhost:5000/users/login', [email, password])
      if (data.data.status) {
        localStorage.setItem("token", data.data.token)
        navigate("/")
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
              Login
            </div>
          </div>
          <form className='form' onSubmit={submit}>
            <div className="form-field">
              <input className='form-input' type='email' placeholder='Email' name='email' onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="form-field">
              <input className='form-input' type="password" placeholder='Password' name='password' onChange={e => setPassword(e.target.value)} />
            </div>

            <button className='form-submit' type='submit'>Login</button>
          </form>
          <div className="form-container-links">
            <span className='form-container-link'>Not created account yet? <Link to="/register">Register</Link></span>
          </div>

        </div>
      </div>
    </>
  )
}
