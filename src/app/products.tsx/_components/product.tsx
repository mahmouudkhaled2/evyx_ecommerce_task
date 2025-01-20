import Image from 'next/image'
import ProductsButtons from './products-buttons'

export default function Product({product}: {product: Product}) {
    
  return (
    <>
      <div className='relative overflow-hidden'>
        <div>
          <Image src={product?.imageCover}  alt={product?.title} loading='lazy' width={242.66} height={242.66} className='w-full' />
        </div>

        <h3 className=' font-normal truncate my-2'>{product?.title}</h3>
        <div className='flex justify-between items-center pt-2.5'>
          <h3 className=' font-semibold'>
            <i className="fa-solid fa-star text-yellow-400 text-[15px] mr-1"></i> 
            {product?.ratingsAverage} 
          </h3>
          <h3 className=' font-semibold'>${product?.price}</h3>
        </div>

        <ProductsButtons productId={product._id}/>
    
      </div>
    </>
  )
}
