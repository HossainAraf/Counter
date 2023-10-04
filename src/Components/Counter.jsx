// Counter.jsx

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment } from './CounterAction'; 

const Counter = () => {
  const count = useSelector((state) => state.count);
const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  return (
    <div className="">
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button>Decrement</button>
    </div>
  );
};

export default Counter;
