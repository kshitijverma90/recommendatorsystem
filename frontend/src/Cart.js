import React from 'react'
import Header from './Header'
import Main from './Main'
import './Cart.css'
import Products from './Products'
function Cart() {
  return (
    <div>
        <Header />
        <Main />
        <div className='title'>
        <h1>Your Cart</h1>
        </div>
        
        <div className='cartbox'>
        <div className='cartlist'>
           items
        </div>
        <div className='cartbill'>
            bills
        </div>
        </div>
        <h4>your may also like</h4>
        <div className="relatedlist">
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
        
        </div>
    </div>
  )
}

export default Cart