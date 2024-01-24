import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

const LoginPage = () => {
  const signInUser = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert('Logged in Successfully');
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  return (
    <div className='text-center flex justify-center items-center flex-col min-h-screen bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]'>
      <h1 className='text-3xl font-bold text-white'>My Todos</h1>
      <button
        onClick={signInUser}
        className='bg-orange-400 p-3 text-sm font-bold text-white rounded-md hover:scale-110 transition-all duration-200 ease-in-out mt-5'
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default LoginPage;
