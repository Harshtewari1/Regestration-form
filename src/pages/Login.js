import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    
  return (
      <>
          <div className='flex items-center bg-black border-4 rounded-lg bg-wnhite'>
              <div className="w-1/3 rounded-md" >
                  <img className='' src='https://images.unsplash.com/photo-1535905496755-26ae35d0ae54?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
              </div>
              <div className='w-2/3 p-8 text-white'>
                  <h1 className="mb-6 text-4xl font-semibold text-center">Registration Form</h1>
                  <h2 className="mb-6 text-2xl text-center" >Login </h2>
                  <form className='flex flex-col block pt-4 text-sm text-lg font-medium text-gray-700 '>
                      <label htmlFor='email' className='pt-4 ml-48 text-2xl' >Email Address</label>
                      <input type='email' placeholder='email' name='email' className="w-1/2 px-3 py-4 ml-48 text-white bg-black border border-gray-300 rounded-md px3 focus:outline-none focus:ring-blue-500 focus:border-blue-500" />

                     

                      <label htmlFor='password' className='pt-4 ml-48 text-2xl' >Password</label>
                      <input type='password' placeholder='Your Password Here' name='password' className="w-1/2 px-3 py-4 ml-48 text-white bg-black border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500" />


                      
                      <div className='flex items-center justify-center gap-10 pt-5'>
                          <button className='px-4 py-2 text-white bg-blue-500 rounded-md w-15 hover:bg-blue-600'>Login</button>
                          <button className='px-4 py-2 text-white rounded-md w-15' onClick={() => navigate('/')} >SignUp </button>
                      </div>

                      <div className='flex items-center justify-center gap-1 pt-5'>
                          <button className='px-4 py-2 text-white rounded-md w-15 hover:bg-red-600'>Sign in via google</button>
                          <button className='px-4 py-2 text-white rounded-md w-15 hover:bg-blue-600'>Sign in via linkdlin</button>
                      </div>

                      <p className="mt-6 text-xs text-gray-500">
                          By signing up, you agree to our Terms of Service and Privacy Policy. Please ensure that all provided information is accurate and up to date.
                          Any misuse of the system may lead to account suspension.
                      </p>


                  </form>

              </div>
          </div>
      </>
  )
}

export default Login