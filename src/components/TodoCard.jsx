import React from 'react'

const TodoCard = () => {
  return (
    <div className='flex items-center justify-between mt-5 p-4 max-w-2xl bg-gray-200 rounded-lg'>
        <div className='flex flex-col'>
            <p>Todo Name</p>
            <p>Time</p>
        </div>
        <div>
            <button className='bg-green-400 text-sm text-white font-bold p-3 rounded-lg mr-3'>Update</button>
            <button className='bg-red-400 text-sm text-white font-bold p-3 rounded-lg '>Delete</button>
        </div>
    </div>
  )
}

export default TodoCard