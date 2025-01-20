'use client'

import Image from 'next/image'
import React from 'react'
import { useUpdateItemQuantity } from '../_hooks/use-update-quantity';
import { useRemoveCartItem } from '../_hooks/use-remove-item';

export default function CartItem({item}: {item: CartItem}) {

    const {mutate: updataItem} = useUpdateItemQuantity();
    const {mutate: removeItem} = useRemoveCartItem();
    
  return (
    <>
        <div className="my-3 relative">
            <button 
            onClick={() => removeItem(item.product._id)}
            type='button' 
            title='Delete'
            className="absolute top-3 right-5">
                <i className="fa-solid fa-trash-can text-lg hover:text-red-500 duration-300"></i>
            </button>
            <div className='flex flex-col sm:flex-row justify-between items-center border-b p-5 bg-white '>

                {/* Image of Product */}
                <div className='w-full h-full sm:w-1/4 sm:h-[150px] overflow-hidden relative mx-2'>
                <Image src={item.product?.imageCover} alt='' width={150} height={0} className="mx-auto"/>
                </div>

                <div className='mb-6 sm:mb-0 w-full sm:w-1/2 text-center mx-2' >

                    {/* Product Title */}
                    <h3 className="text-[15px] md:text-md font-bold mb-6 mt-4 sm:mt-0 truncate">{item?.product?.title}</h3>

                    {/* Quantity Input */}
                    <div className='flex justify-center items-center'>
                        <button
                        onClick={() => updataItem({productId: item.product._id, count: item.count + 1})}
                        type="button"
                        disabled={item.count === item.product.quantity}
                        className={`flex justify-center items-center py-1.5 px-3 bg-slate-300 border hover:bg-slate-400 duration-300 ${item.count === item.product.quantity ? 'opacity-5 cursor-not-allowed': 'cursor-pointer'}`}>+</button>

                        <div className='w-12 py-1.5 px-3 text-center outline-none border'>{item?.count}</div>

                        <button 
                        onClick={() => updataItem({productId: item.product._id, count: item.count - 1})}
                        type='button'
                        disabled={item.count === 1}
                        className={`flex justify-center items-center py-1.5 px-3 bg-slate-300 border hover:bg-slate-400 duration-300 ${item.count === 1 ? 'opacity-70 cursor-not-allowed': 'cursor-pointer'}`}>-</button>
                    </div>
                </div>

                <strong className="w-full sm:w-1/4 text-center mx-2">${item?.price}</strong>
            </div>
        </div>  
    </>
  )
}
