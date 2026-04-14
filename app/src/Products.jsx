import React from 'react'
import { useSelector } from 'react-redux'

const Products = () => {
   const state = useSelector(state=>state)
  return (
    <div>
      <h1>{JSON.stringify(state.products)}</h1>
    </div>
  )
}

export default Products
