import {createContext, useContext} from "react"

// Implemeted the Context functionality

export const TodoContext = createContext({
    todos: [
        {
            
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleTodoCheck: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider