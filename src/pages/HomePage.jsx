import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { AiOutlinePlus } from 'react-icons/ai';
import Todo from '../components/Todo';
import { db } from '../firebase';
import { query, collection, onSnapshot, updateDoc,doc} from 'firebase/firestore';

const style = {
  bg: `h-screen w-screen  bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4 `,
  heading: `text-3xl font-bold text-center text-grey-800 p-2`,
  form: `flex justify-between `,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500`,
  count: `text-center p-2`,
};

const HomePage = () => {
  const [todos, setTodos] = useState([]);

  // Create todo
  // Read todo from firebase
  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe=onSnapshot(q,(querySnapshot)=>{
      let todosArr=[]
      querySnapshot.forEach((doc)=>{
        todosArr.push({...doc.data(),id:doc.id})
      });
      setTodos(todosArr)
    })

    return ()=> unsubscribe();
  },[]);

  // Update todo in firebase
  const toggleComplete=async(todo)=>{
    await updateDoc(doc(db,'todos',todo.id),{
      completed:!todo.completed
    })
  }



  // Delete todo
  return (
    <div className={style.bg}>
      <Header />
      <div className={style.container}>
        <h3 className={style.heading}>Todo App</h3>
        <form className={style.form}>
          <input type="text" placeholder="Add Todo" className={style.input} />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <Todo key={index} todo={todo} toggleComplete={toggleComplete} />
          ))}
        </ul>
        <p className={style.count}>You have 2 todos</p>
      </div>
    </div>
  );
};

export default HomePage;
