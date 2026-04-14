import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../store/feature/productSlice';
import Hero from '../component/Hero';
import Loader from '../component/Loader';

const Home = () => {

  const dispatch = useDispatch();
  const loader = useSelector(state => state.product.loading)
  const data = useSelector(state => state.product.item)

  useEffect(() => {
    dispatch(fetchData());
    

  }, [dispatch])

  const newData = [
    ...new Map(data.map(item => [item.category, item])).values()
  ];

  return (
    <div className='max-w-6xl m-auto bg-white'>
       {loader && (<Loader />)}
      <Hero />

      <div className='mt-10 mb-16'>
        <h1 className='font-black text-center text-4xl md:text-6xl text-gray-900 tracking-tighter'>
          Featured Products
        </h1>

        <div className='w-20 h-1 bg-black mx-auto my-4 rounded-full'></div>

        <div className='grid grid-cols-2 p-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
          {data?.slice(0, 6).map(item => (
            <ProductCard
              key={item.id}
              item={item}
            />
          ))}
        </div>

      </div>

      <div className='text-center font-extrabold text-4xl mt-10 mb-16 '>
        <h1>Shop By Category</h1></div>
      <div className='w-20 mx-auto rounded-full bg-black h-1 my-4'></div>
      <div className='grid w-full gap-4 grid-cols-2 my-4 md:grid-cols-4 '>
        {
          newData?.map((item, index) => (
            <div key={index} className='text-center p-2 hover:scale-90 transition-all duration-400 uppercase border-2 rounded-2xl cursor-pointer'>
              <p>{item.category}</p>
            </div>
          ))
        }
      </div>

      <div className='text-center font-extrabold text-4xl mt-10 mb-16 p-4 mx-2 bg-blue-400 rounded-2xl'>
        <h1>Men Fashion</h1></div>
      <div className='w-20 mx-auto rounded-full bg-black h-1 my-4'></div>
      <div className='grid w-full gap-4 grid-cols-2 my-4 md:grid-cols-4 '>
        {
          data?.map((item) => (
            item.category === "men's clothing" ? <ProductCard
              key={item.id}
              item={item}
            /> : ''
          ))
        }
      </div>


      <div className='text-center font-extrabold p-4 mx-2 bg-pink-400 rounded-2xl text-4xl mt-10 mb-16'>
        <h1>Women Fashion</h1></div>
      <div className='w-20 mx-auto rounded-full bg-black h-1 my-4'></div>
      <div className='grid w-full gap-4 grid-cols-2 my-4 md:grid-cols-4 '>
        {
          data?.map((item) => (
            item.category === "women's clothing" ? <ProductCard
              key={item.id}
              item={item}
            /> : ''
          ))
        }
      </div>
    </div>
  )
}

export default Home
