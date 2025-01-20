'use client'

import getAllCartItems from "@/lib/apis/cart-items.api";
import { useQuery } from "@tanstack/react-query"

export const useCartItems = () => {

    const {data , isLoading, error} = useQuery({
        queryKey: ['cart'],
        queryFn: getAllCartItems,
        staleTime: 60 * 1000,
        retry: 1,    
    })


    return {data , isLoading, error};

}