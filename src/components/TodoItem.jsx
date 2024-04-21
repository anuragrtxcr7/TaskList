import { useEffect, useState } from "react";
import { useTodo } from "../api-contexts/TodoContext";

function TodoItem({ todo, index }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [todoMsg, setTodoMsg] = useState("");
  const { updateTodo, deleteTodo, toggleCheckTodo } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
  };

  const toggleCheck = () => {
    toggleCheckTodo(todo.id);
    setIsChecked((value) => !value);
  };

  useEffect(() => {
    setTodoMsg(todo.todo);
    setIsTodoEditable(false);
    setIsChecked(todo.completed);
  }, [todo]);

  return <div>TodoItem</div>;
}

export default TodoItem;
