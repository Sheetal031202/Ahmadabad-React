import React, { useEffect, useState } from 'react'
import axios from "axios"
import Cards from './Cards'

function Product() {
  const [pro, setPro] = useState([]); 

  async function apiFetch() {
    const apiData = await axios.get("https://fakestoreapi.com/products");
    setPro(apiData.data); 
  }

  useEffect(() => {
    apiFetch();
  }, [])

  return (
    <>
<center>    <h2 >Products</h2></center>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        {pro.map((e, index) =>
          <Cards key={index} i={e.image} t={e.title} p={e.price} />
        )}
      </div>
    </>
  )
}

export default Product
