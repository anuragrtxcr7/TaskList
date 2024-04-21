import './App.css'
import { TodoForm, TodoItem } from './components/index'
import { useState, useEffect } from 'react'
import { TodoProvider } from './api-contexts/TodoContext'
import { useId } from 'react'


function App() {

  const [todos, setTodos] = useState([]);


  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleTodoCheck = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, checked: !prevTodo.checked }
          : prevTodo
      )
    );
  };

  
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodoCheck}}>
      <div>
        <h1>
          TaskList
        </h1>
        <br />
        <div>
          <TodoForm/>
        </div>
        <br />

        <div>
          {todos?.map((todo,index)=>(
            <div key={index}>
              <TodoItem todo={todo} index={index}/>
            </div>
          ))}
        </div>
      </div>

    </TodoProvider>
  )
}

export default App
