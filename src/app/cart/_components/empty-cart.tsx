/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import EmptyCartImage from '@/../public/assets/images/empty-cart.png'

export default function EmptyCart() {
  return (
    <>
        <div className='w-full flex justify-center items-center '>

            <div>
                <div className='mb-2'>
                    <Image src={EmptyCartImage} alt='Empty Cart Image' width={200} height={0} className='mx-auto'/>
                </div>

                <h3 className='text-zinc-800 font-normal text-2xl text-center'>Your cart is empty</h3>
                <p className='text-gray-400 font-light text-center'>Look like you haven't made your choice yet...</p>
            </div>

        </div>
    </>
  )
}
