'use client'
import { createContext, useState, Dispatch, SetStateAction, useEffect } from "react";
import { useSession } from "next-auth/react";
import getAllCartItems from "../apis/cart-items.api";

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

    const session = useSession();

    const getNumOfCart = async () => {
      const payload = await getAllCartItems();
      setNumOfCartItems(payload?.numOfCartItems);
    } 

  useEffect(() => {
    if (session.data) {
      getNumOfCart();
    }
  },[numOfCartItems, session.data])
  
  return (
    <CartContext.Provider value={{ numOfCartItems, setNumOfCartItems }}>
      {children}
    </CartContext.Provider>
  );
}
