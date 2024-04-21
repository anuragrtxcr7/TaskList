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

  const handleAll = () => setTodoType(0);
  const handleCompleted = () => setTodoType(1);
  const handleActive = () => setTodoType(2);

  useEffect(() => {
    const completedTodos = todos.filter((todo) => todo.checked);
    const activeTodos = todos.filter((todo) => !todo.checked);
    const arr3 = [todos, completedTodos, activeTodos];
    setCombinationTodos((hh) => arr3);
  }, [todos]);
  

  
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
            <Button variant="contained" color="secondary" onClick={handleAll}>
              <div>All</div>{" "}
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              color="success"
              onClick={handleCompleted}>
              <div >
                Completed
              </div>
            </Button>
          </div>
          <div
          >
            <Button variant="contained" color="error" onClick={handleActive}>
              <div >
                Active
              </div>
            </Button>
          </div>
        </div>
        <br />

        <div>
          {combinationTodos[todoType]?.map((todo,index)=>(
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
