import React from 'react'

import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../store/feature/productSlice';
import { useSelector,useDispatch } from 'react-redux';

const ProductCard = ({item}) => {
//console.log(item)
    if(!item) return null;
    
    const {title,image,price,id,rating} = item;
    const {count,rate} = rating;
    const navigateUser = useNavigate();
const dispatch = useDispatch();

const sendData = (item,itemId)=>{
    const payload={
        item : item,
        itemId : itemId
    }
    dispatch(addToCart(payload));
}

    return (
        <div className='flex flex-col h-full rounded-lg p-2 group border'> {/* Added flex flex-col h-full */}
            <img className='aspect-square object-contain p-4 group-hover:scale-90 transition-all duration-400' src={image} alt="" />

            <div className='flex flex-col grow gap-2 text-gray-500 '> {/* flex-grow fills the space */}
                <h1 className='text-m line-clamp-2 group-hover:text-blue-600'>{title}</h1>
                <div className='w-full bg-black min-h-0.5'></div>
                <p className='text-xl '>$ {price}</p>

                <div className='flex gap-4 text-xs items-center'>
                    <p className='bg-green-600 font-bold w-fit p-1 px-2 rounded-sm'><span>⭐</span>{rate}</p>
                    <p className='text-gray-500'>{count} reviews</p>
                </div>

                {/* mt-auto pushes the button to the absolute bottom */}
                <button
                    onClick={() => navigateUser(`/products/${id}`)}
                    className='mt-auto bg-blue-300 w-full text-black rounded-md hover:bg-blue-700 '
                >
                    Buy Now
                </button>
                <button
                    onClick={
                        () =>{sendData(item,item.id)}}
                    className='mt-auto bg-pink-400 w-full text-black rounded-md hover:bg-pink-700 '
                >
                    Add To Cart
                </button>
            </div>
        </div>

    )
}

export default ProductCard
