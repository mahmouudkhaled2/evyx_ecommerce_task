'use client'

import LoadingSpinner from "@/components/common/loading/loading-spinner";
import Product from "./product";
import { useProducts } from "@/hooks/use-products";


export default function AllProducts() {

  const { data: payload, isLoading, error } = useProducts();
  
  const products = payload?.data;

  return (
    <>
        <div className='w-full 2xl:max-w-[90%] mx-auto px-5 md:px-0'>
            {/* Section Heading */}
            <h2 className="text-zinc-800 text-2xl font-bold mb-8 tracking-widest">ALL PRODUCTS</h2>

            {!isLoading ?
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5'>
                {products?.map((product: Product) => <Product key={product?._id} product={product}/>)}
              </div>
            : 
             <div className='w-full flex flex-col items-center gap-3 py-20 text-center text-zinc-800'>
                Loading Products...
                 <LoadingSpinner/>
              </div>
            }

            {error && <div className='w-full py-20 text-center text-red-500'>{error.message}</div>}
      
        </div>
    </>
  )
}
