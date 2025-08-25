import React from 'react'
import Products from './components/Products'
import { useState } from 'react'
import { useEffect } from 'react';
import "./App.css"

function App() {

  let [data, setData] = useState([]);
  let [col, setCol] = useState(false)

  async function api() {
    let apiCall = await fetch("https://fakestoreapi.com/products")
    let apiData = await apiCall.json()
    setData(apiData)
  }

  useEffect(() => {
    api()

  }, [])


  return (
    <>
      <div style={{backgroundColor:col?"red":"white"}}>
        <button onClick={()=>{
          setCol(!col)
        }}>Change mode:</button>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {data.map((d, i) =>
            <Products key={i} title={d.title} image={d.image} price={d.price} />

          )}
        </div>
      </div>
    </>
  )
}

export default App
