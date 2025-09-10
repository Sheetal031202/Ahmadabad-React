import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import H from './pages/H'
import P from './pages/P'
import A from './pages/A'
import C from './pages/C'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* router */}
      <Routes>
        <Route path={"/"} element={<H />} />
        <Route path={"/product"} element={<P />} />
        <Route path={"/about"} element={<A />} />
        <Route path={"/contact"} element={<C />} />
      </Routes>


      {/* footer */}
      <Footer />
    </>
  )
}

export default App
