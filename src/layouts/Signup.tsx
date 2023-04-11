import { useState } from 'react'
import { Link } from 'react-router-dom'

import callApi from '../utils/axios/useAPI'
import { message } from 'antd'


const Signup = () => {
    const [signup,setSignup]=useState(
        {
            name:"",
            email:"",
            password:""
        }
    )
    const [error,setError] = useState({
      nameError:null,
      emailError:null,
      passwordError:null,

    })
    const {nameError,emailError,passwordError}=error
    const {name,email,password} = signup
    const handleChange = (e)=>{
        const name = e.target.name;
        setSignup({...signup,[name]:e.target.value})
    }
   const handleSubmit=async(e)=>{
    e.preventDefault()

    const response = await callApi("users","post",{name:name,email:email,password:password})
    if(response){
      message.success("Registration Successfull")
    }
    else{
      message.error("something went wrong .Try again")
    }
   }
   
  return (
<div className="form-signin w-100 m-auto text-center d-flex justify-content-center mt-5">

<form className="col-lg-4" onSubmit={handleSubmit}>

    <h1 className="h3 mb-3 fw-normal">Create New Account</h1>

     <div className="form-floating mb-3">
      <input type="text" name="name" className="form-control"  placeholder="name" value={name} required onChange={handleChange}/>
      <label >Name</label>
     {nameError && <span className='errorMessage'>{nameError}</span>}
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
