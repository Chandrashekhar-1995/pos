import React from 'react'
import DefaultLayout from '../components/DefaultLayout'
import useGetItems from '../hooks/useGetItems'
import { useSelector } from 'react-redux'
import ItemList from '../components/ItemList'

const ItemPage = () => {

  useGetItems()
  const items = useSelector(store => store.items.items)
  console.log(items);
  if (items == null) return;
  return (
    <DefaultLayout>
      <h1>Itel page</h1>
      <div className='flex flex-wrap' >
        {items.map((item) => (<ItemList key={item.ietmCode} item={item} />))}
      </div>
    </DefaultLayout>
  )
}

export default ItemPage