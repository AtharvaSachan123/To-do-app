import React,{useState} from 'react'
import Header from '../components/Header'
import {AiOutlinePlus} from 'react-icons/ai'
import Todo from '../components/Todo'
const style ={
  bg:`h-screen w-screen  bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container:`bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4 `,
  heading:`text-3xl font-bold text-center text-grey-800 p-2`,
  form:`flex justify-between `,
  input:`border p-2 w-full text-xl`,
  button:`border p-4 ml-2 bg-purple-500`,
    count:`text-center p-2`

}

const HomePage = () => {
  const[todos,setTodos]=useState(["Learn React","Grind Leetcode"])


  return (
    <div className={style.bg}>
      <Header/>
      <div className={style.container}>
      <h3 className={style.heading}>Todo App</h3>
      <form className={style.form}>
        <input type='text' placeholder='Add Todo' className={style.input}/>
        <button className={style.button}><AiOutlinePlus size={30}/></button>
      </form>
      <ul>
        {todos.map((todo,index)=>(
           <Todo key={index} todo={todo}/>
           
        ))}
       </ul>
       <p className={style.count}>You have 2 todos</p>
      </div>
      
    </div>
  )
}

export default HomePage
