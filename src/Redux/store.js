import  { configureStore } from '@reduxjs/toolkit';

const reducerFnc = (state = { count: 0 }, action) => {
return state;
}

const store = configureStore({
  reducer: reducerFnc
});

// export const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }
export default store;

