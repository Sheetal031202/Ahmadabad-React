import { useState } from "react";
import "./App.css"

function App() {

  function add() {
    setCount(count + 1)
  }

  function less() {
    setCount(count - 1)
  }

  let [count, setCount] = useState(0)

  return (
    <div>
      <h2>COUNTER APP</h2>
      <button onClick={add}>INCREAMENT</button>
      <span>{count}</span>
      <button onClick={less}>DECREMENT</button>
    </div>
  )
}

export default App;