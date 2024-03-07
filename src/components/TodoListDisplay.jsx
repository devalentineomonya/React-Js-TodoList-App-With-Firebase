
import React from "react";
import TodoItem from "./TodoItem";

const TodoListDisplay = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div className="todo-list-display">
      <div className="todo-display">
        <ul>
          {todos.map((todo, i) => (
            <TodoItem
              key={i}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoListDisplay;
