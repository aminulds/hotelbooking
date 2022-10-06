import React from 'react'

const Button = ({text, type}) => {
  return (
    <button className='btn btnPrimary' type={type}>{text ? text : 'Button'}</button>
  )
}

export default Button