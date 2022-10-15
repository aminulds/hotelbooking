import React from 'react'
import FooterCol from './FooterCol'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-lg-4">
          <FooterCol />
          <FooterCol />
          <FooterCol />
          <FooterCol />
        </div>
      </div>
    </footer>
  )
}

export default Footer