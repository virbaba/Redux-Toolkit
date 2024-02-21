import { createSlice } from "@reduxjs/toolkit";

// creating redux slice name as todoslice
const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  // reducers function
  reducers: {
    // todo add reducer function
    add: (state, action) => {
        state.push({
            text: action.payload,
            completed: false
        })
    },
    // todo toggle reducer function
    toggle: (state, action) => {
        state.map((todo, i) => {
            if(i === action.payload){
                todo.completed = !todo.completed
            }
            return todo;
        })
    }
  },
});

export const { add, toggle} = todoSlice.actions;
export default todoSlice.reducer;