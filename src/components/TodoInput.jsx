import React, { useRef } from "react";

const TodoInput = ({ addTodo, checkKey }) => {
  const inputRef = useRef(null);

  return (
    <div className="todo-input">
      <input
        onKeyUp={checkKey}
        ref={inputRef}
        type="text"
        name="todo"
        id=""
      />
      <div className="todo-button">
        <button onClick={() => addTodo(inputRef.current.value)} type="button">
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
