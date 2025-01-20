'use client'

import Link from "next/link";
import LogoutButton from "./logout-button";
import { useContext, useState } from "react";
import { CartContext } from "@/lib/contexts/cart.context";

export default function NavbarMainButtons() {

  const cartContext = useContext(CartContext);
  const [isCartContext, setIsCartContext] = useState<boolean>(true);

if (!cartContext) {
  setIsCartContext(false);
}

const { numOfCartItems } = cartContext;


  return (
    <>
      <div className="flex justify-center items-center gap-4">

        <LogoutButton/>

        <Link href="/cart" className="relative">
          <i className="fa-solid fa-cart-shopping  text-2xl"></i>

          {numOfCartItems > 0 && 
          <div className="flex justify-center items-center w-4 h-4 rounded-full bg-white text-[12px] text-zinc-800 absolute top-[-1px] left-[7px] z-50">{isCartContext && numOfCartItems}
          </div>
          }
          
        </Link>
      </div>

    </>
  );
}
