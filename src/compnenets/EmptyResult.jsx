import React from 'react'
import EmptyResultImage from "../assets/Error.svg"
const EmptyResult = () => {
  return (
<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>


    <div className='w-[473px] h-[451] flex justify-center items-center'>
        <img src={EmptyResultImage} alt="EmptyResultImage"  className='w-full h-full object-cover'/>
    </div>
</div>
  )
}

export default EmptyResult