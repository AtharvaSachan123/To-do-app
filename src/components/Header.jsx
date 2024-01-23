import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

const Header = () => {
    const [user] =useAuthState(auth);

  return (
    <header className='flex items-center justify-between sticky top-0 bg-white z-10 shadow-lg p-5'>
      <h1 className='text-3xl font-bold'>My Todos</h1>
      <img 
      onClick={()=> auth.signOut()}
      
      src={user?.photoURL} className='h-10 w-10 rounded-full cursor-pointer' />
    </header>
  )
}

export default Header
