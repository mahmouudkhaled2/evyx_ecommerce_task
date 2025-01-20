import Image from 'next/image'
import React from 'react'
import CollectionItem1 from '@/../public/assets/images/collection-item1.jpg'
import CollectionItem2 from '@/../public/assets/images/collection-item2.jpg'

export default function Posters () {
  return (
    <>
      <section className='py-20'>
        <div className='container mx-auto'>

          {/* Section Heading */}

          <div className="inner w-full 2xl:max-w-[90%] mx-auto">
          <h2 className="text-zinc-800 text-2xl font-bold mb-8 tracking-widest">COLLECTIONS</h2>

          <div className="flex gap-6">
            <div className='rounded-2xl overflow-hidden'>
                <Image src={CollectionItem1} alt="" className='w-full' />
            </div>

            <div className='rounded-2xl overflow-hidden'>
                <Image src={CollectionItem2} alt="" className='w-full' />
            </div>
          </div>
              
          </div>
        </div>
      </section>
    </>
  )
}