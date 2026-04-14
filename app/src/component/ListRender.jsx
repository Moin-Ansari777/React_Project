import React from 'react'

const ListRender = ({ title, rating, reviews, price, originalPrice, discount, details, offers, image }) => {
    return (

        <div className='grid grid-cols-[1fr_2fr_1fr] rounded-2xl overflow-hidden'>

            <div className='bg-gray-700'>
                <img className='p-4 aspect-auto' src={image} alt="error" />
            </div>

            <div className='bg-gray-700 p-2'>
                <h1 className='text-white font-bold'>{title}</h1>
                <p className='text-gray-400 text-xs'>⭐{rating} | {reviews}</p>

                <ul className='m-1 p-2 text-xs text-white'>
                    {
                        details.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
                <h2 className='text-green-700'>{offers.exchangeOffer}</h2>
                <p className='text-green-300'>{offers.bankOffer}</p>

            </div>




            <div className='flex flex-col items-end justify-center bg-gray-700 p-4'>
                <h1 className='text-white'>{price}</h1>
                <p className='text-xs text-gray-400 line-through'>{originalPrice}</p>
                <p className='text-green-600'>{discount}</p>
            </div>
        </div>
    )
}

export default ListRender
