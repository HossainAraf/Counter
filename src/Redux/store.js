//IMPORTS
import  { configureStore } from '@reduxjs/toolkit';
import reducerFnc from '../Components/CounterAction';

const store = configureStore({
  reducer: reducerFnc
});

export default store;

