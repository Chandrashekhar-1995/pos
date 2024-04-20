import React from 'react'
import { useDispatch } from 'react-redux'
import {  addItemsInCart } from '../store/cartSlice';

const ItemList = (item) => {
  // console.log(item);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // console.log(item)
    dispatch(addItemsInCart(item))
  }

  return (
    <div className='px-6 shadow-lg m-2 p-2 hover:scale-110 transition-all duration-300 cursor-pointer'>
      <img alt={`${item.item.name}`} className="w-36 md:w-48 pr-4" src={item.item.imageUrl} />
      <div>
        <h2 className="text-lg md:text-3xl py-4">{item.item.name}</h2>
        <h3>MRP Rs. { item.item.mrp}</h3>
        <h3>Sale Price Rs.{ item.item.salePrice}</h3>
        <h3>Available Stock - { item.item.stock} { item.item.unit}</h3>
      </div>
      <div className='text-center'>
        <button className='bg-blue-600 text-white rounded-lg m-2 py-2 px-6 hover:bg-blue-700'onClick={()=>handleAddItem(item)} >Add + </button>
      </div>
    </div>
  )
}

export default ItemList