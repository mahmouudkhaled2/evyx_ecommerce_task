'use client'
import SocialMediaLinks from './../navbar/components/social-media';
import { usePathname } from 'next/navigation';
import { authPages } from '@/lib/utils/auth-pages.util';

export default function Footer() {

    const path = usePathname();
  return (
    <>
        <footer className={`${authPages.includes(path) ? 'hidden' : ''} py-20 shadow-header bg-no-repeat bg-cover bg-center relative`}>
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
