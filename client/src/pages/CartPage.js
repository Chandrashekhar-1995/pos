import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { useSelector, useDispatch } from 'react-redux'
import { removeItemsFromCart, clearCart } from '../store/cartSlice';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(store => store.cart.items)

  const handleClearCart = () => {
    dispatch(clearCart())
  }
  
  const handleRemoveItem = () => {
    dispatch(removeItemsFromCart())
       }

  return (
    <DefaultLayout>
      <div className='w-9/12 bg-gray-50 shadow-lg text-center m-4 p-4 '>
        <h1 className=" text-2xl font-bold">My Cart</h1>
        <button className="p-2 bg-black text-white rounded-lg mt-10" onClick={handleClearCart}>Clear Cart</button>
        {cartItems.length === 0 && <h4>Your Cart is Empty. Add Items to the Cart.😁😁😁</h4>}

        {cartItems.map((item) => (
          <div key={item.item.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
            <div className=" w-9/12">
              <div>
                <img alt={`${item.item.name}`} className="w-36 md:w-48 pr-4" src={item.item.imageUrl} />
              </div>
              <h2 className="text-lg md:text-3xl py-4">{item.item.name}</h2>
                <span className=" font-bold">{item.item.name}</span><br />
                <span> ₹ {item.item.salePrice}</span>
                <p className=" my-6">{item.item.stock}</p>
            </div>
          </div>
        ))}
          
        
      </div>
    </DefaultLayout>
  )
}

export default CartPage


