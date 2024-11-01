import React, { useReducer } from "react";

const intialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case 'reset':
      return {count:0};
  }
}

const Counter =() => {
  const [state,dispatch] = useReducer(reducer,intialState);
   
  return(
    <div>
    <h1>  Count: {state.count}</h1>

    <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
    <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
    <button onClick={() => dispatch ({type : 'reset' })}>Reset</button>
    </div>

    
  );
}

export default Counter


