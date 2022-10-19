import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Country = ({ location, flag, img }) => {
  // const countryLink = location.replace(/\s/g, "").toLowerCase();
  return (
    <div className='col'>
      <Link href='#'>
        <a>
          <div className="country">
            <Image src={img} width={400} height={300} />
            <div className="location">
              <h5 className='name'>{location}</h5>
              <Image src={flag} width={24} height={24} />
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default Country