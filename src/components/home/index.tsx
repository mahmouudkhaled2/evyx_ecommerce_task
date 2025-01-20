import React from 'react'
import OfferStiker from './components/offer-sticker'
import Products from '../../app/products.tsx/page'
import Posters from './components/posters'

export default async function HomePage() {
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
