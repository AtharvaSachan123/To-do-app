import React, { useState } from 'react'
import TodoCard from './TodoCard'

const Body = () => {
    const [input,setInput]=useState("");
    
  return (
    <div>
        <div className='flex items-center justify-between mt-5 p-3 '>
            <h2 className='text-2xl font-bold '>My Todos</h2>
            <button className='bg-green-400 text-sm font-bold text-white p-3 rounded-lg hover:scale-110 transition-all duration-200 ease-in-out'>Add Todo</button>
        </div>

        <div className='max-w-xl flex items-center justify-between p-2'>
            <input
            value={input}
            onChange={e =>setInput(e.target.value)}
            type="text" 
            placeholder='Enter a todo' 
            className='flex-1 bg-gray-200 mr-2 p-3 rounded-lg outline-none' />
            <button className='bg-green-400 text-sm text-white font-bold p-3 rounded-lg mr-3'>Add </button>
        </div>

        {/*Todos*/}
        <div>
        <TodoCard/>
        </div>
      
    </div>
  )
}

export default Body
