import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/Error'
import TLOU1 from './pages/TLOU1'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/TLOU1',
    element: <TLOU1 />,
  },
  {
    path: '/Error',
    element: <ErrorPage errorCode={404} errorMessage="Página não encontrada" />,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
