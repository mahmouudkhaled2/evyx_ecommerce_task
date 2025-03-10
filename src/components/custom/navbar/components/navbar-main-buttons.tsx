'use client'

import Link from "next/link";
import LogoutButton from "./logout-button";
import { useContext, useState } from "react";
import { CartContext } from "@/lib/contexts/cart.context";
import { useSession } from "next-auth/react";

export default function NavbarMainButtons() {

  const cartContext = useContext(CartContext);
  const [isCartContext, setIsCartContext] = useState<boolean>(true);

  const {data} = useSession();

if (!cartContext) {
  setIsCartContext(false);
}

const { numOfCartItems } = cartContext;


  return (
    <>
      <div className="flex justify-center items-center gap-4">
      {!data ? <LoginButton/> : <LogoutButton/>}
        

        <Link href="/cart" className="relative">
          <i className="fa-solid fa-cart-shopping text-2xl text-zinc-900"></i>

          {numOfCartItems > 0 && 
          <div className="flex justify-center items-center w-4 h-4 rounded-full bg-white text-[12px] text-zinc-900 absolute top-[-1px] left-[7px] z-50">{isCartContext && numOfCartItems}
          </div>
          }
          
        </Link>
      </div>

    </>
  );
}


function LoginButton() {
  return (
    <>
        <Link href={'/auth/login'}>
          <div className="flex items-center gap-1 bg-black text-white text-[15px] rounded py-1 px-4">
            <span>Login </span>
              <i className="fa-solid fa-arrow-right-from-bracket ml-1"></i>
          </div>
        </Link>
    </>
  );
}