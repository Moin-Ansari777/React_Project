import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Highlight from './Component/Pages/Highlight.jsx'
import Employees from './Component/Employees.jsx'

const route = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [
    {
      path : '/employee',
      element : <Employees />
    },
    {
      path: '/highlight',
      element: <Highlight />
    }
  ]}
])
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={route} />
  </Provider>,

)
