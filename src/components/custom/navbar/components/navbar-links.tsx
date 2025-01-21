'use client'

import { useState } from 'react'
import Link from 'next/link'
import NavbarMainButtons from './navbar-main-buttons';

export default function NavbarMainLinks() {

    // States
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    // Toggle Handler
    const handleToggler = () => {
        setOpenMenu(!openMenu)
    }

  return (
    <>
    <div className='flex justify-center items-center gap-5 md:hidden '>
        {/* User and Cart Icons in Mobile Screens*/}
        <div>
            <NavbarMainButtons/>
        </div>

        {/* Menu Toggler */}
        <div onClick={handleToggler} className='navbar-toggler cursor-pointer'>
            <i className="fa-solid fa-bars text-2xl"></i>
        </div>
    </div>

    {/* Navbar Links */}
    <div className={`absolute top-16 left-0 right-0 md:relative md:top-0 overflow-hidden transition-[height] duration-500 ${openMenu ? 'h-[280px]' : 'h-[0]'} md:h-auto md:flex justify-between items-center gap-5`}>

        <ul className='flex flex-col md:flex-row items-center md:gap-10'>

            {['Home', 'Men', 'Women', 'Shop', 'Sale'].map ((page, index) => 
                <li key={index} onClick={handleToggler} className="py-3 md:py-0 bg-slate-100 hover:bg-slate-200 md:bg-transparent md:hover:bg-transparent hover:transition duration-200 cursor-pointer w-full text-center">
                    <Link href="/" className='text-[15px] text-zinc-900 lg:text-md font-semibold'>{page}</Link>
                </li>
            )  }

        </ul>
        
        {/* User and Cart Icons From Medium Screens */}
        <div className='hidden md:block'>
            <NavbarMainButtons/>
        </div>
    </div> 
    </>
  )
}
