import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../../store/feature/productSlice'
import {useNavigate} from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.product.cart)
  const grandTotal = cart.reduce((total, item) => (
    total + (item.price * item.quantity)
  ), 0)

  return (
    <div className='p-4 max-w-6xl mx-auto'>
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

{cart.length === 0 && <p className="text-center py-10">Your cart is empty.</p>}
      {/* Table Header - Hidden on mobile */}
      <div className='hidden md:grid grid-cols-5 gap-4 font-bold border-b-2 border-black pb-4'>
        <h3 className='col-span-2'>Product Detail</h3>
        <h3 className='text-center'>Quantity</h3>
        <h3 className='text-center'>Price</h3>
        <h3 className='text-right'>Total</h3>
      </div>

      {/* Cart Items */}
      <div className='flex flex-col gap-6 mt-4'>
        {cart.map((item) => (
          <div
            key={item.id}
            className='grid grid-cols-1 md:grid-cols-5 gap-4 items-center border-b pb-4 md:border-none'
          >
            {/* Image & Title */}
            <div className='flex items-center gap-4 col-span-2'>
              <img src={item.image} className="w-16 h-16 object-contain" alt={item.title} />
              <h3 className='font-medium text-sm md:text-base'>{item.title}</h3>
              <button className='text-red-500 text-sm p-0'
              onClick={()=>{dispatch(removeFromCart(item.id))}}
              >Remove From Cart</button>
            </div>

            {/* Quantity */}
            <div className='flex justify-between md:justify-center items-center'>
              <span className='md:hidden font-bold'>Qty:</span>
              <span>{item.quantity}</span>
            </div>

            {/* Price */}
            <div className='flex justify-between md:justify-center items-center'>
              <span className='md:hidden font-bold'>Price:</span>
              <span>${item.price}</span>
            </div>

            {/* Total */}
            <div className='flex justify-between md:justify-end items-center font-bold text-blue-600'>
              <span className='md:hidden text-black'>Total:</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>

 {cart.length > 0 ? (
        <div className='mt-10 border-t-2 pt-6 flex flex-col items-end'>
          <div className='w-full md:w-1/3 space-y-2'>
            <div className='flex justify-between text-lg'>
              <span>Subtotal:</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
            <div className='flex justify-between text-xl font-bold border-t pt-2'>
              <span>Grand Total:</span>
              <span className='text-blue-600'>${grandTotal.toFixed(2)}</span>
            </div>
            <button
            onClick={()=>navigate('/checkout')}
            className='w-full mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors'>
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center py-10 text-gray-500">Plz Add Item To Cart Grand Total : 0</p>
      )}
      
    </div>
  )
}

export default Cart
