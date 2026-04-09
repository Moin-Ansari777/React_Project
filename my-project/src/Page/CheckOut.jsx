import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import OrderSuccesfull from '../component/OrderSuccesfull';


const CheckOut = () => {
    const [order, setOrder] = useState(false);
    const navigate = useNavigate()

    const { productId } = useParams()
    const singleProduct = useSelector(state => state.product.item)
    const cartItems = useSelector(state => state.product.cart)
    let displayItem = []

    if (productId) {
        const item = singleProduct.find(item => String(productId) === String(item.id));
        console.log(item)
        displayItem = item ? [{ ...item, quantity: 1 }] : [];
    }
    else {
        displayItem = cartItems || [];
    }

    useEffect(()=>{
        if(displayItem.length === 0){
            navigate('/')
        }
    },[displayItem,navigate]);

    const totalPrice = displayItem.reduce((total, item) => (
        total + (item.quantity * item.price)
    ), 0)
    return (
        <>
            {order ? <OrderSuccesfull /> :
                <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left: Shipping & Payment Form */}   {/* Right: Order Summary */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md h-fit">
                        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                        <div className="space-y-4 border-b pb-4 mb-4">
                            {displayItem.map(item => (
                                <div key={item.id}
                                    className="grid grid-cols-[40px_1fr_80px] gap-4 items-center border-b py-2">


                                    <div className="flex justify-start">
                                        <img src={item.image} className='w-8 h-8 object-contain' alt="" />
                                    </div>

                                    <div className="text-start overflow-hidden">
                                        <span className='block font-medium line-clamp-1' title={item.title}>
                                            {item.title}
                                            <span className="text-gray-500 text-sm ml-2">(x{item.quantity})</span>
                                        </span>
                                    </div>

                                    <div className="text-right font-semibold">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className="flex justify-between text-lg font-bold">
                            <span>Total:</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4">Shipping Information</h2>
                        <form className="space-y-4">
                            {/* <input type="text" placeholder="Full Name" className="w-full p-2 border rounded" required />
                    <input type="email" placeholder="Email Address" className="w-full p-2 border rounded" required />
                    <input type="text" placeholder="Address" className="w-full p-2 border rounded" required />
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="City" className="border p-2 rounded" />
                        <input type="text" placeholder="ZIP Code" className="border p-2 rounded" />
                    </div> */}
                            <button
                                onClick={(e) => { e.preventDefault(); setOrder(true) }}
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">

                                Place Order
                            </button>
                        </form>
                    </div>


                </div>
            }
        </>
    )
}

export default CheckOut;
