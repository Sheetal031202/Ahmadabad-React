import React from 'react'
import { Route, Routes } from "react-router";
import ProductCreate from './components/ProductCreate';
import SinglePruductRead from './components/SInglePruductRead';
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