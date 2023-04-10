import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export const Login = () => {
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
const handleSubmit=(e)=>{
 
}
// useEffect(() => {
//   fetch("http://localhost:3333/users").then((res)=>res.json()).then((data)=>console.log(data)) 
// }, [])
 
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
