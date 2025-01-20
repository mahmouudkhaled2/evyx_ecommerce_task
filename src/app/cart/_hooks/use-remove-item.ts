'use client'

import { CONTENT_TYPE } from "@/lib/constants/api.constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";


export function useRemoveCartItem() {

    const queryClient = useQueryClient();

        const { mutate, isError, isPending } = useMutation({

        mutationKey: ['cart'],

        mutationFn: async (productId: string) => {
            try {
                const response = await fetch(`/api/cart/${productId}`, {
                    method: "DELETE",
                    headers: {
                        ...CONTENT_TYPE,
                    },
                });
        
                const payload = await response.json();
        
                if (!response.ok) {
                    console.error("Error:", payload.message);
                    toast.error('Faild to add the product');
                    return;
                }

                toast.success('Product Has Been Deleted !');
                return payload;
        
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