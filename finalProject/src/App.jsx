import React from 'react'
import HeaderPage from './Components/Header/HeaderPage'
import { Outlet } from 'react-router'
import FooterPage from './Components/Header/Footer/FooterPage'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderPage />

      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <Outlet />
      </main>
      <FooterPage />

    </div>

  )
}

export default App
