// App.jsx
import "./App.css";
import React, { useEffect } from "react";
import TodoList from "./tdodUiComponent/TodoList";
import Form from "./tdodUiComponent/Form";
import { useSelector, useDispatch } from "react-redux";
import Alert from "react-bootstrap/Alert";
import { clear } from "./Toolkit-folder/ExtraReducer"; // Import the action creator

function App() {
  const dispatch = useDispatch();
  const msg = useSelector((state) => state.message);

  useEffect(() => {
    if (msg) {
      const timeoutId = setTimeout(() => {
        dispatch(clear()); // Dispatch the action to clear the message
      }, 3000);

      // Clear the timeout when the component unmounts or when msg changes
      return () => clearTimeout(timeoutId);
    }
  }, [msg, dispatch]);

  return (
    <>
      {msg && (
        <>
          <Alert variant="success" className="alert">
            <Alert.Heading className="alert-heading">{msg}</Alert.Heading>
          </Alert>
        </>
      )}
      <Form />
      <TodoList />
    </>
  );
}

export default App;
