// counterSlice.js

//IMPORTS
import { createSlice } from '@reduxjs/toolkit';

// SLICE
const counterSlice = createSlice({
  name: 'count',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
    addByAmount: (state, action) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, addByAmount } = counterSlice.actions;
export default counterSlice.reducer;
