'use client'

import { CONTENT_TYPE } from "@/lib/constants/api.constant";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

type MutateParams = {
    productId: string,
    count: number
}

export function useUpdateItemQuantity() {
    
const queryClient = useQueryClient();

const {mutate, isError, isPending} = useMutation({

        mutationKey: ['cart'],

        mutationFn: async ({productId, count}: MutateParams) => {
            try {
                const response = await fetch(`/api/cart/${productId}`, {
                    method: "PUT",
                    headers: {
                        ...CONTENT_TYPE,
                    },
                    body: JSON.stringify({ count }),
                });
        
                const payload = await response.json();
        
                if (!response.ok) {
                    console.error("Error:", payload.message);
                    toast.error('Faild to add the product');
                    return;
                }

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