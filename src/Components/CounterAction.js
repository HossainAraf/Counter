// REDUCER
const reducerFnc = (state = { count: 0 }, action) => {

  // must Synchonous function
  // must return a new state object. can't mutate the state object

  if (action.type === 'INCREMENT') {
    return {
      ...state,
      count: state.count +1
    }
  }
  if (action.type === 'DECREMENT') {
    return {
      ...state,
      count: state.count -1
    }
  }
return state;
}

const increment = () => {
  return {
    type: 'INCREMENT',
  }
}


const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}

export { increment, decrement };
export default reducerFnc;
