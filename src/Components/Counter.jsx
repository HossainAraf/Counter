// IMPORTS
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../Redux/counterSlice';

// COMPONENT
const Counter = () => {
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default Counter;