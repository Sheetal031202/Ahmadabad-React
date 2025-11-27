import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { routes } from './RoutesPage/RoutesPage.jsx'
import { Provider } from 'react-redux'
import { store } from './store/Store.js'

createRoot(document.getElementById('root')).render(
         <RouterProvider router={routes}/>

)
