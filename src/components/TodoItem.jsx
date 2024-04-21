import React, {useState} from 'react'
import { useTodo } from '../api-contexts/TodoContext'

function TodoItem() {

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
    <div>TodoItem</div>
    <form onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit" /* submit a non-empty todo */
      >
        Add
      </button>
    </form>


    </>

    

  )
}

export default TodoItem