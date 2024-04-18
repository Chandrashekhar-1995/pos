import React from 'react'

const ItemList = (item) => {
  // console.log(item.item);
  return (
    <div className='px-6 shadow-lg m-2 p-2 hover:scale-125 transition-all duration-500 cursor-pointer'>
      <img alt={`${item.item.name}`} className="w-36 md:w-48 pr-4" src={item.item.imageUrl} />
      <div>
        <h2 className="text-lg md:text-3xl py-4">{item.item.name}</h2>
        <h3>MRP Rs. { item.item.mrp}</h3>
        <h3>Sale Price Rs.{ item.item.salePrice}</h3>
        <h3>Available Stock - { item.item.stock} { item.item.unit}</h3>
      </div>
    </div>
  )
}

export default ItemList