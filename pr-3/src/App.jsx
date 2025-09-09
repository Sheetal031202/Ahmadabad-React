import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import axios from "axios";
import Section from './components/Section';


function App() {

  let [data, setData] = useState([])


  async function Api() {
    let apiData = await axios.get("https://fakestoreapi.com/products")
    setData(apiData.data)
  }
  useEffect(() => {
    Api();
  }, [])
  return (
    <>
      <Navbar />

      <center><h2 style={{ backgroundColor: "black", color: "white", width: "25%", padding: "10px", borderRadius: "10px" }}>Products</h2></center>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.length > 0 && data.map((d, i) =>
          <Section key={i} title={d.title} image={d.image} price={d.price} />
        )}

        {/* <Products title={"he"} image={"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"} price="74787" /> */}
      </div>
      <Footer/>
    </>
  )
}

export default App