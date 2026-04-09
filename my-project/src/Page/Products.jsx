import React, { useEffect, useState } from 'react'
import Loader from '../component/Loader'
import ProductCard from '../component/ProductCard';
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../store/feature/productSlice';

const Products = () => {

    const loader = useSelector(state=>state.product.loading)
    const productData = useSelector(state=>state.product.item)


     const dispatch = useDispatch();
    // useEffect(() => {
    //  dispatch(fetchData());
     
    // }, [dispatch])


    return (
        <div className='grid grid-cols-5 gap-4 p-4 max-[1200px]:grid-cols-4 max-[900px]:grid-cols-3 max-[600px]:grid-cols-2'>
            {loader && (<Loader />)}
            {
                productData?.map(item => (
                    <ProductCard key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default Products
