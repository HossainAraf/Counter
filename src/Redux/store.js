import  { configureStore } from '@reduxjs/toolkit';

const reducerFnc = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}

const store = configureStore({
  reducer: reducerFnc
});

export default store;

