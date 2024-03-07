import React from "react";
import delete_icon from "../assets/delete.png";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li className={todo.finished ? 'finished' : ''}>
      <input type="checkbox" checked={todo.finished} onChange={() => toggleTodo(todo.id)} />
      <p>{todo.text}</p>
      <img
        src={delete_icon}
        alt="Delete"
        width="25px"
        onClick={() => deleteTodo(todo.id)}
      />
    </li>
  );
};

export default TodoItem;
