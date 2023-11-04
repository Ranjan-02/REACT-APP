import { useReducer } from 'react'
import './App.css'

function App() {
  let intialState = 10
  function reducerFunction(state, action) {

    return state;
    // 

  }

  useReducer(reducerFunction, intialState)
  return (
    <>
      <h1>Count = 10</h1>
      <button>Incriment</button>
      <button>Decriment</button>
    </>
  )
}

export default App
