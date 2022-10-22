import React from 'react'

const Button = ({ text, type }) => {
  return (
    <button className='btn btnPrimary' type={type ? type : 'button'}>{text ? text : 'Button'}</button>
  )
}

export default Button