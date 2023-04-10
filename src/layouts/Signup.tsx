
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { signupURL } from '../api/api'

const Signup = () => {
    const [signup,setSignup]=useState(
        {
            name:"",
            email:"",
            password:""
        }
    )
    const {name,email,password} = signup
    const handleChange = (e)=>{
        const name = e.target.name;
        setSignup({...signup,[name]:e.target.value})
    }
   const handleSubmit=async(e)=>{
   const response = await fetch(signupURL,{
    method: 'POST',
    body: JSON.stringify({name:name,email:email,password:password}),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
   })

   }
   
  return (
<div className="form-signin w-100 m-auto text-center d-flex justify-content-center mt-5">

<form className="col-lg-4" onSubmit={handleSubmit}>

    <h1 className="h3 mb-3 fw-normal">Create New Account</h1>

     <div className="form-floating mb-3">
      <input type="text" name="name" className="form-control"  placeholder="name" value={name} required onChange={handleChange}/>
      <label >Name</label>
    </div>
    <div className="form-floating mb-3">
      <input type="email" name="email" className="form-control" id="floatingInput" placeholder="name@example.com" value={email} required onChange={handleChange}/>
      <label >Email address</label>
    </div>
    <div className="form-floating mb-3">
      <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} required onChange={handleChange}/>
      <label >Password</label>
    </div>


    <button type="submit" className="w-100 btn btn-lg btn-primary" >Sign up</button>
    <h4>Already have an account?   <Link to='/login'>Login Here</Link></h4>
  </form>
</div>
  )
}

export default Signup
