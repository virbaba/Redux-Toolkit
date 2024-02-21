import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slicer";
import ExtraReducer from "./ExtraReducer";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    message: ExtraReducer,
  },
});

export default store;
