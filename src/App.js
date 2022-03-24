import './App.css';
import React, { useReducer, useEffect } from 'react';

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
  STORED: 'store',
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.INCREMENT:
      return { count: state.count + 1 }
    case ACTION.DECREMENT:
      return { count: state.count - 1 }
    case ACTION.RESET:
      return { count: 0 }
    case ACTION.STORED:
      return { count: state.count }
    default:
      return state;
  }
}

const LOCAL_STORAGE_KEY = 'testUseEffect'

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  useEffect(() => {
    const storedCount = localStorage.getItem(LOCAL_STORAGE_KEY);
    // state.count = Number(storedCount);
    state.count = Number(storedCount)
    dispatch({type: ACTION.STORED})
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, state.count)
  }, [state.count])

  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
      <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
      <button onClick={() => dispatch({ type: ACTION.RESET })}>RESET</button>
    </div>
  );
}

export default App;
