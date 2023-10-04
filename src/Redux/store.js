import  { configureStore } from '@reduxjs/toolkit';
import countReducer from '../Components/Counter';


const store = configureStore({
  reducer: countReducer
});

export default store;

