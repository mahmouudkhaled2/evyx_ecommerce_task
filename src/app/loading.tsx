import LoadingSpinner from '@/components/common/loading/loading-spinner'
import React from 'react'

export default function Loading() {
  return (
    <>
        <div className='h-screen flex justify-center items-center'>
            <LoadingSpinner w={35} h={35}/>
        </div>
    </>
  )
    
  
}
