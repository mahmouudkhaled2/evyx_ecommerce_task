'use client'

import CartProvider from "@/lib/contexts/cart.context"
import QueryClientProviders from "./query-client.provider"
import NextAuthProvider from "./next-auth-provider"

interface ProvidersProps {
    children: React.ReactNode
}

export default function Providers ({children}: ProvidersProps) {

    return (
        <NextAuthProvider>
            <QueryClientProviders>
                <CartProvider>
                    {children}
                </CartProvider>
            </QueryClientProviders>
        </NextAuthProvider>

    )
}