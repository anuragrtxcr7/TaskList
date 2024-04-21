import { useEffect, useState } from "react";
import { useTodo } from "../api-contexts/TodoContext";

function TodoItem({ todo, index }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [todoMsg, setTodoMsg] = useState("");
  const { updateTodo, deleteTodo, toggleTodoCheck } = useTodo();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg });
  };

  const toggleCheck = () => {
    toggleTodoCheck(todo.id);
    setIsChecked((value) => !value);
  };

  useEffect(() => {
    setTodoMsg(todo.todo);
    setIsTodoEditable(false);
    setIsChecked(todo.checked);
  }, [todo]);

  return (
    <>
    <div>Individual Todo Item</div>
        <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleCheck}
          disabled={isTodoEditable}
        />
        <input
          type="text"
          
          style={
            isChecked
              ? {
                  textDecoration: "line-through",
                }
              : null
          }
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
        <button onClick={() => {
            if (!todoMsg.trim()) {
              setTodoMsg("");
              return;
            }

            if (isTodoEditable) {
              editTodo();
            }
            setIsTodoEditable((prev) => !prev);
          }}
          disabled={isChecked}
        >
          {isTodoEditable ? (
            <i className="fa fa-save text-xl"></i>
          ) : (
            <i className="fa fa-edit text-xl"></i>
          )}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
        >
          <i className="fa fa-trash text-xl"></i>
        </button>
        </div>
    </>
  )
}

export default TodoItem;
