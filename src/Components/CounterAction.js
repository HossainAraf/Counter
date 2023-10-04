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
return state;
}

export const increment = () => {
  return {
    type: 'INCREMENT',
  }
}

export default reducerFnc;
