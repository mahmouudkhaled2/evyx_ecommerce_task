'use client'
import FormModal from '@/app/auth/_components/form-modal'
import { useParams } from 'next/navigation'
import React from 'react'

export default function CheckOutPage() {
  const {cartId} = useParams();

  return (
        <>
          <section className="main-section bg-no-repeat bg-center bg-cover relative z-10 flex justify-center items-center py-20 px-5 md:px-0">
            <div className="overlay absolute w-full h-full bg-black bg-opacity-70"></div> 
             <FormModal form="checkout" id={`${cartId}`}/>
          </section>  
        </>
  )
}
