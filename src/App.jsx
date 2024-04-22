import "./App.css";
import { TodoForm, TodoItem, DropArea } from "./components/index";
import { useState, useEffect } from "react";
import { TodoProvider } from "./api-contexts/TodoContext";
import { Button } from "@mui/material";

function App() {
  const [todos, setTodos] = useState([]); // All the tasks will be stored here in this state
  const [combinationTodos, setCombinationTodos] = useState([]); // Stores 3 arrays - All tasks, Completed Tasks, Pending Tasks
  const [todoType, setTodoType] = useState(0); // can have 3 numbers (0 - All tasks), (1 - Completed tasks), (2- Pending Tasks)
  const [activeCard, setActiveCard] = useState(null); // // Stores Which TASk is active (by index) when access its first clicked to Drag

  // implemented Add Task Functionality
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  // implemented Update Task Functionality
  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );
  };

  // implemented Update Task Functionality
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // implemented Toggle Task Check Functionality
  const toggleTodoCheck = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, checked: !prevTodo.checked }
          : prevTodo
      )
    );
  };

  const handleAll = () => setTodoType(0); // 0 for all
  const handleCompleted = () => setTodoType(1); // 1 for completed
  const handleActive = () => setTodoType(2); // 2 for active


  // getting data from local storage whenever page is rendered and alloting it to the state
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  // fetching data to the local storage and updating Combination Todos whenever any task information changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    const completedTodos = todos.filter((todo) => todo.checked);
    const activeTodos = todos.filter((todo) => !todo.checked);
    const arr3 = [todos, completedTodos, activeTodos];
    setCombinationTodos((hh) => arr3);
  }, [todos]);


  // Implemented onDrop Functionality whenever a Dragged Todo Is Dropped
  const onDrop = (position) => {
    if (activeCard === null || activeCard === undefined) return;
    // if (position > activeCard) console.log(`${activeCard} is going to ${position - 1}`);
    // else console.log(`${activeCard} is going to ${position}`);
    const todoToMove = todos[activeCard];
    const updatedTodos = todos.filter((_, index) => index !== activeCard);

    updatedTodos.splice(position > activeCard ? position - 1 : position, 0, {
      ...todoToMove,
    });
    setTodos(updatedTodos);
  };

  return (
    <TodoProvider // Wrapped all tasks, functionalities inside a Global Provider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleTodoCheck }}
    >
      <div className="w-full backdrop-blur-lg max-w-xl m-auto p-10 shadow-md rounded-lg">
        <h1 className="text-5xl text-pink-600 font-bold text-center mb-10">
          TaskList
        </h1>
        <div>
          {/* Create Todo Component */}
          <TodoForm />
        </div>
        <div className="flex flex-wrap items-center justify-evenly mt-10">
          
          <div
            className={`border-4 rounded-lg ${
              todoType === 0 ? "border-black" : "border-purple-400"
            }`}
          >
            {/* All todos Filter Button */}
            <Button variant="contained" color="secondary" onClick={handleAll}>
              <div className="h-6 text-lg">All</div>{" "}
            </Button>
          </div>
          <div
            className={`border-4 rounded-lg ${
              todoType === 1 ? "border-black" : "border-green-400"
            }`}
          >
            {/* Completed todos Filter Button */}
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
            {/* Pending/Active todos Filter Button */}
            <Button variant="contained" color="error" onClick={handleActive}>
              <div className="h-6 text-lg items-center justify-center">
                Active
              </div>
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap mt-5">
          <div className="w-full">
            <DropArea onDrop={() => onDrop(0)} />
          </div>
          {combinationTodos[todoType]?.map((todo, index) => (
            <div key={index} className="w-full">
              {/* Individual Task Item */}
              <TodoItem
                todo={todo}
                setActiveCard={setActiveCard}
                index={index}
              />
              <DropArea onDrop={() => onDrop(index + 1)} />
            </div>
          ))}
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
