import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { toggle } from "../Toolkit-folder/Slicer";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function handleToggle(id) {
    dispatch(toggle(id));
  }
  return (
    <>
      <div className="list-group">
        {todos.map((todo, id) => (
          <div
            key={id}
            className="list-item"
            style={{ borderColor: todo.completed ? "green" : "Red" }}
          >
            <span className="todo-text">{todo.text}</span>
            <Button
              variant="outline-secondary"
              id="button-addon2"
              className="toggle-todo-btn"
              onClick={() => handleToggle(id)}
            >
              {todo.completed ? "Completed" : "Pending"}
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoList;
