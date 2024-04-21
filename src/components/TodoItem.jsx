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
        <div className={`flex h-16 border-4 rounded-xl px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black 
          ${
            isTodoEditable
              ? "bg-blue-300 border-blue-600"
              : isChecked
              ? "bg-green-300 border-green-600"
              : "bg-red-300 border-red-600"
          }
          `}>
        <input
          type="checkbox"
          className="w-8"
          checked={isChecked}
          onChange={toggleCheck}
          disabled={isTodoEditable}
        />
        <input
          type="text"
          className={`border text-xl outline-none w-full rounded-xl ${
            isTodoEditable
              ? "border-slate-800 border-2 px-2 text-cyan-300 bg-slate-900"
              : "bg-transparent border-transparent cursor-grab"
          }`}
          style={
            isChecked
              ? {
                  textDecoration: "line-through",
                  textDecorationColor: "black",
                  textDecorationThickness: "3px",
                }
              : null
          }
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly={!isTodoEditable}
        />
        <button
        className="inline-flex w-10 h-10 rounded-lg text-sm border bg-yellow-100 border-black/10 justify-center items-center hover:bg-yellow-300 shrink-0 disabled:opacity-50"
         onClick={() => {
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
        className="inline-flex w-10 h-10 rounded-lg text-sm border border-black/10 justify-center items-center bg-yellow-100 hover:bg-yellow-300 shrink-0"
          onClick={() => deleteTodo(todo.id)}
        >
          <i className="fa fa-trash text-xl"></i>
        </button>
        </div>
    </>
  )
}

export default TodoItem;
