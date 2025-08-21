import { useState, useEffect } from 'react'
import Product from './components/product';

function App() {
  {/* 1 create state */ }
  // agar  useState ma empty array na kariye to undefind aave ..etle empty array karyu chhe 
  let [data, setData] = useState([])


  // 2 async function
  async function a() {
    // api fetch
    const d = await fetch("https://fakestoreapi.com/products");
    // convert data intoJSON
    const q = await d.json();
    setData(q);
  }


  // 3 use Effect

  useEffect(() => {
    console.log("useffect");
    a();
  }, []);

  return (
    <>
      <h2>API</h2>
      {data.map((val, index) => {
        return <Product key={index} val={val} />

      })

      }
    </>
  )

}

export default App