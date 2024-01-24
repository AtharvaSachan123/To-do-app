import React from 'react'
import Header from '../components/Header'

const style ={
  bg:`h-screen w-screen  bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`
}

const HomePage = () => {
  return (
    <div className={style.bg}>
      <Header/>

      
    </div>
  )
}

export default HomePage
