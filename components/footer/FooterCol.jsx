import Link from 'next/link';
import React from 'react';
import { footerData } from './footerData';

const FooterCol = () => {
  return (
    <div className='col'>
      <div className="col_wrap">
        {footerData.map((item) => (
          <Link href={item.link}>
            <a className='nav-link'>{item.text}</a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FooterCol