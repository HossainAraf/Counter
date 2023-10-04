// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const counter = useSelector((state) => state.counter);
  return (
    <div className="">
     <h1>{counter}</h1>
     <button>Increment</button>
      <button>Decrement</button>

    </div>
  );
}

export default App;
