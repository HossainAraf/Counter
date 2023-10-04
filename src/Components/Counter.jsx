//IMPORTS 
import React from 'react';
import { useSelector,  useDispatch } from 'react-redux';
import { increment, decrement } from './CounterAction'

//COMPONENT
const Counter =  () => {
  const counter = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  }

  const handleDecrement = () => {
    dispatch(decrement());
  }

  return (
    <div className="">
     <h1>{counter}</h1>
     <button onClick={handleIncrement} >Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
