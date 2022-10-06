import Image from 'next/image'
import React from 'react'
import Button from '../UI/Button'

const OfferItem = ({title, descr, btnText, img}) => {
  return (
    <div className='col'>
      <div className="card border-0 offerItem">
        <Image className='itemImg' src={img} width={600} height={224} />
        <div className="itemBody">
          <h4>{title}</h4>
          <p>{descr}</p>
          <Button type="button" text={btnText} />
        </div>
      </div>
    </div>
  )
}

export default OfferItem