import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Page/About.jsx'
import Contact from './Page/Contact.jsx'
import Home from './Page/Home.jsx'
import Products from './Page/Products.jsx'
import SingleProducts from './Page/SingleProduct.jsx'
import { Provider } from 'react-redux'
import store from '../store/store.js'
import Cart from './Page/Cart.jsx'
import CheckOut from './Page/CheckOut.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/products',
        element: <Products/>
      },
      {
        path: '/products/:id',
        element: <SingleProducts/>
      },
      {
        path: '/about',
        element : <About/>
      },
      {
        path:'/contact',
        element: <Contact />
      },
      {
        path: '/cart',
        element : <Cart/>
      },
      {
        path: '/checkout/:productId?',
        element : <CheckOut/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(

  <>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  </>

)
