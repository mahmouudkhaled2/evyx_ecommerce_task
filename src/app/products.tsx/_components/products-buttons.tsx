'use client'

import { useAddToCart } from "@/hooks/use-add-to-cart"

export default function ProductsButtons({productId}: {productId: string}) {

    const {mutate: addItem} = useAddToCart(productId);
    
  return (
    <>
        <div className='group flex justify-between items-center gap-3 bg-transparent absolute top-0 bottom-0 left-0 right-0'>
          <span className='details-icon flex justify-center items-center bg-black opacity-0 text-white w-[45px] h-[45px] rounded-full cursor-pointer absolute top-[47%] left-5 duration-500 group-hover:translate-y-[-100%] group-hover:opacity-[1] hover:bg-zinc-700'>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>

          <span 
          onClick={()=> addItem()}
          className='add-to-cart flex justify-center items-center bg-black opacity-0 text-white w-[45px] h-[45px] rounded-full cursor-pointer absolute top-[60%] left-5 duration-500 group-hover:translate-y-[-100%] group-hover:opacity-[1] hover:bg-zinc-700'>
            <i className="fa-solid fa-cart-plus"></i>
          </span>
        </div>
    </>
  )
}
