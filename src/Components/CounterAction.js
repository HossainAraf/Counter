// counterAction.js

// IMPORT
// import { useDispatch } from 'react-redux';


// ACTION
const increment = () => {
  return {
    type: 'INCREMENT',
  };
}

// REDUCER
const initialState = {
  count: 0,
};

const countReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      count: state.count + 1,
    };
  }
}


// EXPORT
export { increment };
export default countReducer;

  // // ACTION
  // const increment = () => {
  //   dispatch({ type: 'INCREMENT' });
  //     }
    
  //     // REDUCER
  //     const initialState = {
  //       count: 0,
  //     };
    
  //     const reducer = (state = initialState, action) => {
    
    
  //     if (action.type === 'INCREMENT') {
  //       return {
  //         ...state,
  //         count: state.count + 1,
  //       };
  //     }
    