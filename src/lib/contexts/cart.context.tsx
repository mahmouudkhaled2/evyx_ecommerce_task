'use client'
import { createContext, useState, Dispatch, SetStateAction, useEffect } from "react";
// import getAllCartItems from "../apis/cart-items.api";
import { useCartItems } from "@/app/cart/_hooks/use-cart-items";

interface CartContextType {
  numOfCartItems: number ; 
  setNumOfCartItems: Dispatch<SetStateAction<number>>;
}

export const CartContext = createContext<CartContextType>({
  numOfCartItems: 0 , 
  setNumOfCartItems: () => {}
});

interface CartProviderProps {
  children: React.ReactNode;
}

export default function CartProvider({ children }: CartProviderProps) {
  const [numOfCartItems, setNumOfCartItems] = useState<number>(0);

  // function getNumOfCartItems() {
  //     const payload = await getAllCartItems();
  // }

  const {data: cart} = useCartItems();

  useEffect(() => {
    setNumOfCartItems(cart?.numOfCartItems || 0)
  },[cart?.numOfCartItems])
  
  return (
    <CartContext.Provider value={{ numOfCartItems, setNumOfCartItems }}>
      {children}
    </CartContext.Provider>
  );
}
