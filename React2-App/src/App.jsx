import { useState, useEffect } from 'react'
import Product from './components/product';

function App() {
  let [data, setData] = useState([])

  async function api() {
    let apiData = await fetch("https://fakestoreapi.com/products");
    let apiRes = await apiData.json();
    setData(apiRes);
  }

  useEffect(() => {
    api();
  }, [])


  return (
    <>
      {data.map((d, i) =>
        <Product key={i} title={d.title} image={d.image} price={d.price} />

      )}
    </>
  )

}

export default App