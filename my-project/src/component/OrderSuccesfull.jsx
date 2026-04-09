import React from 'react'
import { TiTick } from "react-icons/ti";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { emptyCart } from '../../store/feature/productSlice';


const OrderSuccesfull = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const handler = () => {
        dispatch(emptyCart());
        navigate('/');
    }
    return (
        <div className="flex items-center justify-center min-h-[60vh] p-4">
            <div className='max-w-md w-full gap-6 flex flex-col bg-white border border-gray-100 shadow-2xl rounded-3xl p-8 items-center text-center transition-all animate-in fade-in zoom-in duration-500'>

                {/* Animated Icon */}
                <div className='flex items-center justify-center w-20 h-20 bg-green-50 text-green-500 text-6xl rounded-full shadow-inner animate-bounce'>
                    <TiTick />
                </div>

                <div className="space-y-2">
                    <h1 className='text-3xl font-extrabold text-gray-800 tracking-tight'>
                        Order Successful!
                    </h1>
                    <p className='text-gray-500 font-medium'>
                        Thank you for your purchase.
                    </p>
                </div>

                <div className='bg-blue-50 border border-blue-100 rounded-2xl p-4 w-full'>
                    <p className='text-blue-700 text-sm leading-relaxed'>
                        🎉 Your order will arrive soon! <br />
                        A <strong>GST Invoice</strong> has been sent to your registered email.
                    </p>
                </div>

                <button
                    onClick={()=>handler()}
                    className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-95 hover:shadow-xl'
                >
                    Continue Shopping
                </button>

                <p className="text-xs text-gray-400">Order ID: #ORD-{Math.floor(Math.random() * 100000)}</p>
            </div>
        </div>
    )
}

export default OrderSuccesfull
