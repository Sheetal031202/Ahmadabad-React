import React, { useState } from 'react'

function App() {

  let [count,setCount]=useState(0)
  return (
    <>
      <h2>Counter</h2>


<button onClick={()=>(setCount(count+1))}>INCREMENT</button>
<span style={{margin:"0 20px"}}>{count}</span>
{/* disable ma count nivalue 0 thase to button disable thay jase */}
<button  disabled={count==0} onClick={()=>(setCount(count-1))}>DECREMENT</button>
<button  style={{margin:"0 20px"}} onClick={()=>(setCount(count=0))}>RESEt</button>


    </>
  )
}

export default App
