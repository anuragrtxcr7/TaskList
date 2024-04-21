import './App.css'
import { TodoForm, TodoItem, DropArea } from './components/index'
import { useState, useEffect } from 'react'
import { TodoProvider } from './api-contexts/TodoContext'
import { Button } from '@mui/material'


function App() {

  const [todos, setTodos] = useState([]);
  const [combinationTodos, setCombinationTodos] = useState([]);
  const [todoType, setTodoType] = useState(0);
  const [activeCard, setActiveCard] = useState(null);


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
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    const completedTodos = todos.filter((todo) => todo.checked);
    const activeTodos = todos.filter((todo) => !todo.checked);
    const arr3 = [todos, completedTodos, activeTodos];
    setCombinationTodos((hh) => arr3);
  }, [todos]);


  const onDrop = (position) => {
    if (activeCard === null || activeCard === undefined) return;
    // if (position > activeCard)
    //   console.log(`${activeCard} is going to ${position - 1}`);
    // else console.log(`${activeCard} is going to ${position}`);
    const todoToMove = todos[activeCard];
    const updatedTodos = todos.filter((_, index) => index !== activeCard);

    updatedTodos.splice(position > activeCard ? position - 1 : position, 0, {
      ...todoToMove,
    });
    setTodos(updatedTodos);
  };
  

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleTodoCheck}}>
      <div className="w-full backdrop-blur-lg max-w-xl m-auto p-10 shadow-md rounded-lg">
        <h1 className="text-5xl text-pink-600 font-bold text-center mb-10">
          TaskList
        </h1>
        <div >
          <TodoForm/>
        </div>
        <div className="flex flex-wrap items-center justify-evenly mt-10">
        <div className={`border-4 rounded-lg ${ todoType=== 0 ? "border-black" : "border-purple-400"}`}
          >
            <Button variant="contained" color="secondary" onClick={handleAll}>
              <div className="h-6 text-lg">All</div>{" "}
            </Button>
          </div>
          <div
            className={`border-4 rounded-lg ${
              todoType === 1 ? "border-black" : "border-green-400"
            }`}
          >
            <Button
              variant="contained"
              color="success"
              onClick={handleCompleted}
            >
              <div className="h-6 text-lg items-center justify-center">
                Completed
              </div>
            </Button>
          </div>
          <div
            className={`border-4 rounded-lg ${
              todoType === 2 ? "border-black" : "border-red-400"
            }`}
          >
            <Button variant="contained" color="error" onClick={handleActive}>
              <div className="h-6 text-lg items-center justify-center">
                Active
              </div>
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap mt-5">
          <div className="w-full">
            <DropArea onDrop={() => onDrop(0)}/>
          </div>
          {combinationTodos[todoType]?.map((todo,index)=>(
            <div key={index} className="w-full">
              <TodoItem todo={todo} setActiveCard={setActiveCard} index={index}/>
              <DropArea onDrop={() => onDrop(index + 1)}/>
            </div>
          ))}
        </div>
      </div>

    </TodoProvider>
  )
}

export default App
