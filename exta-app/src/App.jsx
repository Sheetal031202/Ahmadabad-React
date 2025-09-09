import React, { useEffect, useState } from 'react'
import Product from './components/Product';

function App() {
  const [data, setData] = useState([])
  const [mode, setMode] = useState(false)

  async function apiFetch() {
    let apiCall = await fetch("https://fakestoreapi.com/products");
    let apiData = await apiCall.json()
    setData(apiData)
  }


  useEffect(() => {
    apiFetch()
  }, [])

  return (
    <>
            <button onChange={() =>  setMode(!mode) }>CHANGE MODE</button>

      <div style={{backgroundColor:mode?"red":"pink"}}>
      {data.map((e, i) =>
        <Product key={i} t={e.title} i={e.image} p={e.price} />
      )}
      </div>

    </>
  )
}

export default App
