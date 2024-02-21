// ExtraReducer.jsx
import { createSlice } from "@reduxjs/toolkit";
import { add } from "./Slicer";

export const clearMessage = () => ({ type: "notification/clear" });

const notificationSlice = createSlice({
  name: "Notification",
  initialState: "",
  reducers: {
    // Add the clear case
    clear: (state) => {
      return "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(add, (state, action) => {
      return "Todo Created";
    });
  },
});

export const { clear } = notificationSlice.actions; // Export the action creator
export default notificationSlice.reducer;
