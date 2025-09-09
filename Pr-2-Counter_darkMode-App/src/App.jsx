import React, { useState } from 'react'
import "./App.css"

function App() {
  let [count, setCount] = useState(0)
  let [col, setCol] = useState(false)

  return (
    <>
      <button style={{backgroundColor:"green",margin:"0 10px"}} onClick={()=>setCol(!col)}>Change mode</button>
              <button  onClick={()=>setCount(count=0)}>RESET</button>

      <div className='m' style={{backgroundColor:col?"black":"white"}}>
        <h2>Counter App</h2>

        <button onClick={()=>setCount(count+1)}>INCREMENT</button>
        <div>
          <span>{count}</span>
        </div>
        <button disabled={count==0} onClick={()=>setCount(count-1)}>DECREMENT</button>
      </div>
    </>
  )
}

export default App
