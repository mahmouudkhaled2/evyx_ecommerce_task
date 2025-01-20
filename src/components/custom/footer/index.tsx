import React from 'react'
import SocialMediaLinks from './../navbar/components/social-media';

export default function Footer() {
  return (
    <>
        <footer className='py-20 shadow-header bg-no-repeat bg-cover bg-center relative'>
            <div className='relative z-10'>
                <div className='mb-5'>
                    <p className='text-center text-zinc-800 text-[15px] font-normal'>© Copyright E-Commerce Website Example 2025.</p>
                </div>

                <div className='flex justify-center items-center'>
                    <SocialMediaLinks/>
                </div>
            </div>
            <div className="overlay absolute top-0 w-full h-full bg-white bg-opacity-80 z-0 "></div>
        </footer>
    </>
  )
}
