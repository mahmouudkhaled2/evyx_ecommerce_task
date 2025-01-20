import Link from 'next/link'
import React from 'react'

export default function SocialMediaLinks() {
  return (
    <>
        <ul className='flex justify-center items-center gap-3'>
            <li>
                <Link href="/">
                <i className="fa-brands fa-facebook-f text-[15px]"></i>
                </Link>
            </li>

            <li>
                <Link href="/">
                <i className="fa-brands fa-instagram text-[15px]"></i>
                </Link>
            </li>

            <li>
                <Link href="/">
                <i className="fa-brands fa-twitter text-[15px]"></i>
                </Link>
            </li>

            <li>
                <Link href="/">
                <i className="fa-brands fa-pinterest text-[15px]"></i>
                </Link>
            </li>
        </ul>
    </>
  )
}
