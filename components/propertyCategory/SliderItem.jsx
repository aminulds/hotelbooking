import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SliderItem = ({ type, amount, img }) => {
  // const itemLink = type.replace(/\s/g, "").toLowerCase();
  return (
    <div className='card shadow slider_item'>
      <Image className='card-img-top' src={img} width={300} height={240} />
      <Link href='#'>
        <a className='property_link'>
          <div className='card-body'>
            <h5>{type}</h5>
            <p className='mb-0'>
              <span className='me-2'>{amount}</span>
              <span>{type}</span>
            </p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default SliderItem