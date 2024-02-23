import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from 'api'; // Assume this is your API module

// Define the async thunk
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await api.fetchData();
  return response.data;
});

// Create a slice with the async thunk
const dataSlice = createSlice({
  name: 'data',
  initialState: { data: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the async thunk and the reducer
export { fetchData };
export default dataSlice.reducer;
