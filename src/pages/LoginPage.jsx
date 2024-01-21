import React from 'react'
import { auth, provider } from '../firebase'

const LoginPage = () => {
const signInUser= async()=>{
    try{
  await  signInWithPopUp(auth,provider)
    }catch(error){
        console.error('Error signing in:', error.message)
    }
}

  return (
    <div className='text-center flex justify-center items-center flex-col mt-56'>
     <h1 className='text-3xl font-bold'>My Todos</h1>
     <button className='bg-orange-400 p-3 text-sm font-bold text-white rounded-md hover:scale-110 transition-all duration-200 ease-in-out mt-5 '>Sign in with Google</button>
    </div>
  )
}

export default LoginPage
