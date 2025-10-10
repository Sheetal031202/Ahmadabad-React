import React from 'react'
import Products from './components/Products'
import Create from './components/Create'
import { Route, Routes } from "react-router";
import Read from './components/Read';

function App() {
  return (
    <>
      <Routes>
        <Route  path="/" element={<Create />}></Route>
           <Route path="/read/:readId" element={<Read />} />

      </Routes>


    </>
  )
}

export default App