import React from 'react'
import MenuShortcut from './MenuShortcut'
import SecondaryContainer from './SecondaryContainer'

const MainContainer = () => {
  return (
    <div className='col-span-8 mx-4'>
    <div className='flex'>
        <MenuShortcut/>
        <SecondaryContainer/>
    </div>
    </div>
  )
}

export default MainContainer