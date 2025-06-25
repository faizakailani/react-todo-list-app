import React from "react";
import "./TodoItem.css";

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <div className="todo-item">
      <span
        onClick={() => toggleComplete(todo.id)}
        className={todo.completed ? "completed" : ""}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  );
};

export default TodoItem;
