import React from 'react'

export default function OfferStiker() {
  return (
    <section className='offer-sticker py-20'>
        <div className="container mx-auto">
            <div className='inner w-full 2xl:w-[90%] mx-auto flex flex-col md:flex-row justify-between items-center bg-slate-100 p-16 overflow-hidden relative sm:before:text-[120px] md:before:text-[135px]  lg:before:text-[150px]'>
                <div >
                    <h2 className='text-[55px] font-extrabold'>10% OFF Discount Coupons</h2>
                    <p className='text-xl italic text-gray-500'>Subscribe us to get 10% OFF on all the purchases</p>
                </div>

                {/* Email Me Button */}
                <div className='md:mx-10 relative z-10'>
                    <button type="button" title="Email me!" className='py-3 px-8 mt-10 md:mt-0 text-[15px] text-white bg-black rounded-md  font-medium hover:px-[34px] hover:py-[18px] duration-500 shadow-[0_0_6px_1px_rgba(0,0,0,0.7)]'>
                        EMAIL ME
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}
