import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import callApi from '../utils/axios/useAPI'
import { message } from 'antd'


export const Login = () => {
  const navigate = useNavigate()
  const [signIn,setSignIn]=useState(
    {
        email:"",
        password:""
    }
)
const {email,password} = signIn
console.log(signIn)
const handleChange = (e)=>{
    const name = e.target.name;
    setSignIn({...signIn,[name]:e.target.value})
}
const handleSubmit=async(e)=>{
  e.preventDefault()
  const response= await callApi("login","post",{email:email,password:password})
  if(response){
    message.success('logged in')
    navigate('/')
  }
  else{
    message.error ('The email address or mobile number you entered isnt connected to an account')
  }
}

  return (
<div className="form-signin w-100 m-auto text-center d-flex justify-content-center mt-5">
<form className="col-lg-4" onSubmit={handleSubmit}>
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
 
    <div className="form-floating mb-3">
      <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} required onChange={handleChange}/>
      <label >Email address</label>
    </div>
    <div className="form-floating mb-3">
      <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} required onChange={handleChange}/>
      <label >Password</label>
    </div>

    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <h5>Do not have account?   <Link to='/signup'>Creat Here</Link></h5>
  </form>
</div>
  )
}
