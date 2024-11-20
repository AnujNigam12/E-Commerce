import React from 'react'
import { useRef, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserContext from '../context/UserContext'

export default function Signin() {
  let ctx = useContext(UserContext);
  console.log(ctx)

  let emailRef = useRef()
  let passRef = useRef()

  let navigate = useNavigate()

  const submitForm = () => {
    let arr = JSON.parse(localStorage.getItem('EcomAuth'));
    let formObj = {
      Email: emailRef.current.value,
      Password: passRef.current.value
    }
    console.log(formObj)

    let checkUser = arr.find((ele) => ele.Email === formObj.Email && ele.Password === formObj.Password)

    if (checkUser) {
      toast.success('User signin successfully', { position: "top-center", theme: "dark" });
      ctx.loginUser({login:true,email:formObj.Email})
      navigate('/')
    }
    else {
      toast.error("User doesn't exists", { position: "top-center", theme: "dark" });
      navigate('/signup')
    }
  }

  return (
    <div style={{ marginBottom: '50px', paddingTop: '100px', width: '500px', marginLeft: '30%' }}>
      <form className="max-w-md mx-auto">
        <h1 style={{ paddingBottom: '20px', textShadow: '5px 5px 5px black' }} className="text-center text-3xl underline">Login Page</h1>
        <div className="relative z-0 w-full mb-5 group">
          <input ref={emailRef} type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input ref={passRef} type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>
        <button onClick={submitForm} style={{ marginLeft: '33%' }} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        <p className='text-center'>I haven't any account ?<Link to="/signup" style={{color:'red'}}>SignUp</Link></p>
      </form>

    </div>
  )
}
