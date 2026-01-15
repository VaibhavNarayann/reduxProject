import React from 'react'

export const ResultCard = ({item}) => {



  return (
    <div className='w-94 h-94  bg-white rounded-xl  outline-none'>
  
          <img src={item.src} alt="" ></img>
    </div>
  )
}
