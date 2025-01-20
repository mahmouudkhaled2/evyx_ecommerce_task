'use client'

import getAllProducts from "@/lib/apis/products.api";
import { useQuery } from "@tanstack/react-query"

export const useProducts = () => {

    const {data , isLoading, error} = useQuery({
        queryKey: ['products'],
        queryFn: getAllProducts,
        staleTime: 60 * 1000,
        retry: 1,
        refetchOnMount: true
    })


    return {data , isLoading, error};

}