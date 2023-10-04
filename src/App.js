// import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { useSelector,  useDispatch } from 'react-redux';
import './App.css';
import { increment } from './Redux/store'
function App() {
  const counter = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  }


  return (
    <div className="">
     <h1>{counter}</h1>
     <button onClick={handleIncrement} >Increment</button>
      <button>Decrement</button>

    </div>
  );
}

export default App;
