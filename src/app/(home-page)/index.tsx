import React from 'react'
import OfferStiker from './_components/offer-sticker'
import Products from '../products.tsx/page'
import Posters from './_components/posters'

export default async function HomePage() {

  console.log(process.env.NODE_ENV);
  
  return (
    <>
      <div>
        <OfferStiker/>
        <Posters/>
        <Products/>
      </div>
    </>
  )
}
