'use client'
import { useCartItems } from '../_hooks/use-cart-items'
import Link from 'next/link'
import CartItem from './cart-item'
import EmptyCart from './empty-cart'
import CustomButton from '@/app/auth/_components/custom-button'
import LoadingSpinner from '@/components/common/loading/loading-spinner'

export default function CartContainer() {

    const {data: cart , isLoading, error} = useCartItems();
    const items = cart?.data?.products;
    const subtotal = cart?.data?.totalCartPrice
    const shipping = subtotal * 0.02;

  return (
    <>
        <div className='bg-slate-100 w-full max-w-2xl p-10 rounded-lg'>


            {/* Cart Items */}
            {isLoading && 
            <div className='w-full flex flex-col items-center gap-3 py-20 text-center text-zinc-800'>
                Loading Cart...
                <LoadingSpinner/>
            </div>} 

            { items?.length === 0  && !isLoading ? <EmptyCart/> : 
                <div>
                    {items?.map((item: CartItem) => <CartItem key={items._id} item={item}/> )}      
                </div>
            }
            
            {error && <div className='w-full py-20 text-center text-red-500'>{error.message}</div>}

            {/* Total Prices */}
            <ul className="mt-5"> 
                <li className='p-3 flex justify-between items-center'>
                    <span className='text-zinc-700 italic'>Subtotal:</span>
                    <span className='text-zinc-700'>${subtotal? subtotal : 0 }</span>
                </li>
                <li className='p-3 flex justify-between items-center'>
                    <span className='text-zinc-700 italic'>Shipping:</span>
                    <span className='text-zinc-700'>${shipping ? shipping : 0}</span>
                </li>
                <li className='p-3 flex justify-between items-center bg-slate-300'>
                    <span className='text-zinc-700 italic'>Total:</span>
                    <span className='text-zinc-700'>${subtotal + shipping || 0}</span>
                </li>
            </ul>

            {/* Checkout Button */}
            <Link href={`/cart/${cart?.cartId}/checkout`} onClick={(e) => { if (!cart?.cartId) e.preventDefault(); }}>
                <CustomButton 
                loading={false} 
                type={"button"} 
                title={"Check out"} 
                disabled={!cart?.cartId}
                styles={`flex justify-center items-center w-full mt-5 py-2.5 text-center border border-[#bbb]
                ${!cart?.cartId ? 'opacity-50 cursor-not-allowed' : ''} hover:bg-black hover:text-white transition duration-300 mb-5`}/>
            </Link>

          </div>
    </>
  )
}
