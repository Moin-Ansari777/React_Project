import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import Loader from '../component/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, fetchData } from '../../store/feature/productSlice';

const SingleProduct = () => {
    const dispatch = useDispatch()
    const { id } = useParams();
    const navigate = useNavigate();

    const products = useSelector(state => state.product.item);
    const data = products.find(item => String(item.id) === String(id))

    useEffect(() => {
        if (products.length === 0) {
            dispatch(fetchData())
        }
    }, [dispatch, products, length])
    
    if (!data) {
        return <Loader />
    }

    const sendData = (item, itemId) => {
        const payload = {
            item: item,
            itemId: itemId
        }
        dispatch(addToCart(payload));
    }
    return (
        <div className='max-w-6xl m-auto p-4 md:p-10'>
            {/* Grid: 1 column on mobile, 2 columns on desktop */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start'>

                {/* Left Side: Image Container */}
                {/* md:sticky only applies on desktop; h-72 prevents it from taking all space on mobile */}
                <div className='bg-white p-6 rounded-2xl border border-gray-100 flex justify-center md:sticky md:top-24 h-72 md:h-auto'>
                    <img
                        className='h-full w-full object-contain hover:scale-105 transition-transform duration-500'
                        src={data.image}
                        alt={data.title}
                    />
                </div>

                {/* Right Side: Product Details */}
                <div className='flex flex-col gap-5'>

                    {/* Discount & Offer Tag */}
                    <div className='flex flex-wrap items-center gap-2'>
                        <span className='bg-red-100 text-red-600 text-[10px] md:text-xs font-bold px-2 py-1 rounded-full uppercase'>
                            Limited Offer: 20% Off
                        </span>
                        <span className='text-gray-400 text-xs font-medium'>Free Delivery</span>
                    </div>

                    <h1 className='text-2xl md:text-3xl font-extrabold text-gray-800 leading-tight'>
                        {data.title}
                    </h1>

                    {/* Rating & Pricing */}
                    <div className='flex items-center gap-3'>
                        <div className='bg-green-500 text-white px-2 py-0.5 rounded text-sm font-bold flex items-center'>
                            {data.rating?.rate} <span className='ml-1 text-[10px]'>★</span>
                        </div>
                        <span className='text-gray-400 text-sm border-l pl-3'>{data.rating?.count} reviews</span>
                    </div>

                    <div className='bg-gray-50 p-4 rounded-xl border border-gray-100'>
                        <div className='flex items-baseline gap-3'>
                            <span className='text-3xl font-bold text-gray-900'>₹{data.price}</span>
                            <span className='text-lg text-gray-400 line-through'>₹{Math.floor(data.price * 1.25)}</span>
                        </div>
                        <p className='text-green-600 text-sm font-bold mt-1'>Save ₹{Math.floor(data.price * 0.25)} today!</p>
                    </div>

                    {/* Description */}
                    <div className='mt-2'>
                        <h3 className='text-sm font-bold text-gray-500 uppercase tracking-widest mb-2'>Description</h3>
                        <p className='text-gray-600 leading-relaxed text-sm md:text-base line-clamp-4 md:line-clamp-none'>
                            {data.description}
                        </p>
                    </div>

                    {/* Action Buttons: Responsive height and padding */}
                    <div className='flex flex-col sm:flex-row gap-3 mt-4'>
                        <button className='flex-1 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 md:py-4 rounded-xl transition-all active:scale-95'
                            onClick={() => { sendData(data, data.id) }}
                        >
                            ADD TO CART
                        </button>
                        <button
                            onClick={() => navigate(`/checkout/${data.id}`)}
                            className='flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 md:py-4 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-95'>
                            BUY NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SingleProduct
