import React, {useState, useEffect } from "react";
import "./todolist.css";
import TodoInput from "./TodoInput";
import TodoListDisplay from "./TodoListDisplay";

const TodoList = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {  
    if (typeof text === 'string' && text.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        text: text.trim(),
        finished: false,
      };
      setTodos([...todos, newTodo]);
    }
  };
  

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, finished: !todo.finished } : todo
    );
    setTodos(updatedTodos);
  };

  const checkKey = (event) => {
    if (event.key === "Enter") {
      addTodo(event.target.value);
      event.target.value = "";
    }
  };

  return (
    <div className="container">
      <div className="todo-container">
        <h1>TODO LIST APP WITH REACT</h1>
        <TodoInput addTodo={addTodo} checkKey={checkKey} />
        <TodoListDisplay
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
};

export default TodoList;
