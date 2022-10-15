import React from 'react'
import Button from '../UI/Button'

const Subscriber = () => {
  return (
    <section className='subscriber'>
      <div className="container">
        <div className="subscriber_wrap">
          <div className="title">
            <h4>Save time, save money!</h4>
            <p>Sign up and we'll send the best deals to you</p>
          </div>
          <form className="email">
            <input type="email" placeholder='Your Email' className='form-control' />
            <Button type='button' text='Subscribe' />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Subscriber