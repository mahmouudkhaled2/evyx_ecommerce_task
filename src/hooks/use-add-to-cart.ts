'use client'
import { CONTENT_TYPE } from "@/lib/constants/api.constant";
import { CartContext } from "@/lib/contexts/cart.context";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import toast from "react-hot-toast";


export function useAddToCart(productId: string) {

    const session = useSession();
    const {setNumOfCartItems} = useContext(CartContext);
    
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
        
                const payload = await response.json();
                console.log("Success:", payload);
                
        
                if (!response.ok) {
                    console.error("Error:", payload.message);
                    toast.error('Faild to add the product');
                    return;
                }

                toast.success(payload.message || 'Product Added Successfully');
                setNumOfCartItems(payload.data.numOfCartItems)
                return payload;
        
            } catch (error) {
                console.error("Error:", error);
                if (!session.data) {

                    toast.error('You should to login to access  this feature');

                    return
                }
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