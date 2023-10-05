// IMPORTS
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { increment, decrement, incrementByInput, decrementByInput } from '../Redux/counterSlice';

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

  const handleIncrementByInput = () => {
    // Parse inputValue to a number and pass it as an argument
    const amountToAdd = parseInt(input, 10);
    if (!isNaN(amountToAdd)){
      dispatch(incrementByInput(amountToAdd));
  } else {
    alert('Please enter a number');
  }
}

  const handleInput = (e) => {
    setInput(e.target.value); 
  }
  
  const handleDecrementByInput = () => {
    const amountToSubtract = parseInt(input, 10);
    if (!isNaN(amountToSubtract)) {
      dispatch(decrementByInput(amountToSubtract));      
  } else {
    alert('Please enter a number');
  }
}
  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrementByInput}>+ Your input value</button>
      <button onClick={handleDecrementByInput}>+ Your input value</button>
      <input type='text' onChange={handleInput}></input>
    </div>
  );
}

export default Counter;