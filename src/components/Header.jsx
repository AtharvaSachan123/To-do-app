import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const Header = () => {
  const [user] = useAuthState(auth);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignOut = () => {
    auth.signOut().then(() => {
      // You can add additional logic here if needed
      alert("Do you wanna log out")
      setIsDropdownOpen(false);
    });
  };

  return (
    <header className='flex items-center justify-between sticky top-0 transparent z-10 p-5 m-0 '>
      <h1 className='text-3xl text-white font-sans hover:text-gray-300 transition-all duration-300 ease-in-out font-bold'>
        My Todos
      </h1>
      <div className='relative'>
        <img
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          src={user?.photoURL}
          className='h-10 w-10 rounded-full cursor-pointer hover:scale-105 duration-300 transition-all'
          alt='User Profile'
        />
        {isDropdownOpen && (
          <div className='absolute top-14 right-0 bg-white border shadow-md p-4 rounded-md'>
            <button
              onClick={handleSignOut}
              className='text-xl block w-full text-left py-2 px-4 hover:bg-gray-100 transition-all duration-300'
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
