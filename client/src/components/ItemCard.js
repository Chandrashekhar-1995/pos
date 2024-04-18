import React from 'react'

const ItemCard = (imageUrl) => {
  return (
    <div className="w-36 md:w-48 pr-4">
        <img alt="Item Card" src={imageUrl} />
        </div>
  )
}

export default ItemCard