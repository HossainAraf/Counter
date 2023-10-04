// import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector((state) => state.count);
  return (
    <div className="">
     <h1>{counter}</h1>
     <button >Increment</button>
      <button>Decrement</button>

    </div>
  );
}

export default App;
