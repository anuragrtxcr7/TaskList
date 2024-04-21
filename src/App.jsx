import './App.css'
import { TodoForm, TodoItem } from './components/index'
import { useState, useEffect } from 'react'
import { TodoProvider } from './api-contexts/TodoContext'
// import { useId } from 'react'
import { Button } from '@mui/material'


function App() {

  const [todos, setTodos] = useState([]);
  const [combinationTodos, setCombinationTodos] = useState([]);
  const [todoType, setTodoType] = useState(0);



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
          <div>
            <Button variant="contained" color="secondary">
              <div>All</div>{" "}
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              color="success">
              <div >
                Completed
              </div>
            </Button>
          </div>
          <div
          >
            <Button variant="contained" color="error">
              <div >
                Active
              </div>
            </Button>
          </div>
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
