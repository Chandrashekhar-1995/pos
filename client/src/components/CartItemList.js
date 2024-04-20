import React from 'react'
import { useDispatch } from 'react-redux'
import { addItemsInCart } from '../store/cartSlice';


const CartItemList = (item) => {
      const dispatch = useDispatch();

      const handleAddItem = (item) => {
        // console.log(item)
        dispatch(addItemsInCart(item))
      };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg justify-between grid grid-cols-1 divide-y">
       <div key={item.card.info.id} data-testid="foodItem" className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
          <div className=" w-9/12">
            <span className=" font-bold">{item.name}</span><br />
           <span> ₹ {item.card.info.defaultPrice/100 || item.card.info.price/100}</span>
           <p className=" my-6">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
              <div className=" absolute">
                <button  className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg" onClick={() => handleAddItem(item)} >
                   Add +
                </button>
              </div>
           <img className="w-full" src={CDN_URL+item.card.info.imageId}/>
       </div>
    </div>
    </div>
    );


    // <div className='px-6 shadow-lg m-2 p-2 hover:scale-110 transition-all duration-300 cursor-pointer'>
    //   <img alt={`${item.item.name}`} className="w-36 md:w-48 pr-4" src={item.item.imageUrl} />
    //   <div>
    //     <h2 className="text-lg md:text-3xl py-4">{item.item.name}</h2>
    //     <h3>MRP Rs. { item.item.mrp}</h3>
    //     <h3>Sale Price Rs.{ item.item.salePrice}</h3>
    //     <h3>Available Stock - { item.item.stock} { item.item.unit}</h3>
    //   </div>
    //   <div className='text-center'>
    //     <button className='bg-blue-600 text-white rounded-lg m-2 py-2 px-6 hover:bg-blue-700'onClick={()=>handleAddItem(item)} >Add + </button>
    //   </div>
    // </div>
//   )
}

export default CartItemList;