// IMPORTS
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { increment, decrement, addByAmount } from '../Redux/counterSlice';

// COMPONENT
const Counter = () => {
  const counter = useSelector((state) => state.value);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

  const handleAddByInput = () => {
    // Parse inputValue to a number and pass it as an argument
    const amountToAdd = parseInt(input, 10);
    if (!isNaN(amountToAdd)) {
      dispatch(addByAmount(amountToAdd));
    }
  }

  const handleInput = (e) => {
    setInput(e.target.value); // Update inputValue when the input changes
  }
  
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleAddByInput}>+ Your input value</button>
      <input type='text' onChange={handleInput}></input>
    </div>
  );
}

export default Counter;