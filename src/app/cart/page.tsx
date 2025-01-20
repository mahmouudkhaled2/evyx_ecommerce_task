import React from 'react'
import CartContainer from './_components/cart-container'

export default function cartPage() {
  
  return (
    <>
      <section>
        <div className=' flex flex-col justify-center items-center py-20 px-7 md:px-0'>
            <h2 className="text-2xl font-bold tracking-wider mb-10 max-w-2xl">CART ITEMS...</h2>
            <CartContainer/>
        </div>
      </section>
    </>
  )
}
