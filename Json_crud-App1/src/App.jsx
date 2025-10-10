import React from 'react'
import ProductCreate from './componets/ProductCreate'
import { Route, Routes } from "react-router";
import SinglePruductRead from './componets/SinglePruductRead';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <ProductCreate/>}></Route>
        <Route path="/singleRead/:singleId" element={ <SinglePruductRead/>}></Route>

      </Routes>


    </>
  )
}

export default App