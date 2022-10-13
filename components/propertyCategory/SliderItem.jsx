import Image from 'next/image'
import React from 'react'

const SliderItem = ({ type, amount, img }) => {
  return (
    <div className='card shadow'>
      <Image className='card-img-top' src={img} width={300} height={240} />
      <div className='card-body'>
        <h5>{type}</h5>
        <p className='mb-0'>
          <span className='me-2'>{amount}</span>
          <span>{type}</span>
        </p>
      </div>
    </div>
  )
}

export default SliderItem