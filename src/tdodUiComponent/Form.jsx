import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Forme from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { add } from "../Toolkit-folder/Slicer";
import { useDispatch } from "react-redux";

function Form() {
  const todoInput = useRef();
  const dispatch = useDispatch();

  function addTodo() {
    const text = todoInput.current.value;
    if (text !== "") dispatch(add(todoInput.current.value));
    todoInput.current.value = "";
  }

  return (
    <>
      <InputGroup className="input-group">
        <Forme.Control
          placeholder="Type Todo Here..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          ref={todoInput}
          className="input-box"
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          className="add-btn"
          onClick={addTodo}
        >
          Add Todo
        </Button>
      </InputGroup>
    </>
  );
}

export default Form;
