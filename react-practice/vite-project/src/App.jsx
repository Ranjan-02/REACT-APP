import { useState } from "react"

function App() {
  const [count, setCount] = useState(Number)

  function addCounter() {
    setCount(count + 1)
  }

  function removeCounter() {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Hellow React {count} </h1>
      <button onClick={addCounter}>Add {count}</button>
      <button onClick={removeCounter}>Remove{count}</button>
    </>
  )
}

export default App
