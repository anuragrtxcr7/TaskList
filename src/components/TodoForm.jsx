import React, {useState} from 'react'
import { useTodo } from '../api-contexts/TodoContext'

function TodoForm() {

const[todo, setTodo] = useState("");
const {addTodo} = useTodo();

const add = (e) =>{
    e.preventDefault();
    const gg = todo;
    if(!todo.trim()){
        setTodo("");
        return;
    }

    addTodo({todo, checked:false});
    setTodo("");
}

  return (
    <>
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border-4 text-lg text-cyan-300 bg-slate-900 h-12 placeholder-cyan-400 border-slate-700 rounded-l-xl rounded-r-none px-4 outline-none duration-150 py-1.5"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-4 border-indigo-400 px-6 text-xl focus:outline-none hover:bg-indigo-600 rounded-l-none rounded-r-xl" /* submit a non-empty todo */
      >
        Add
      </button>
    </form>
    </>
  )
}

export default TodoForm