'use client'
import { CONTENT_TYPE } from "@/lib/constants/api.constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";


export function useAddToCart(productId: string) {
    
    const queryClient = useQueryClient();
    const {mutate, isError, isPending} = useMutation({

        mutationKey: ['cart'],

        mutationFn: async () => {
            try {
                const response = await fetch("/api/cart", {
                    method: "POST",
                    headers: {
                        ...CONTENT_TYPE,
                    },
                    body: JSON.stringify({ productId }),
                });
        
                const data = await response.json();
                console.log("Success:", data);
                
        
                if (!response.ok) {
                    console.error("Error:", data.message);
                    toast.error('Faild to add the product');
                    return;
                }

                toast.success('Product Has Added Successfully');
                return data;
        
            } catch (error) {
                console.error("Error:", error);
                toast.error('Something went wrong, try again');
                throw new Error('Something went wrong, try again');
            }
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["cart"] });
        },

        
    })


    return  {mutate, isError, isPending} ;

} 