import { CONTENT_TYPE } from "@/lib/constants/api.constant";
import { getToken } from "next-auth/jwt";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

    const token = await getToken({ req });

    if (!token) {
        redirect('/auth/login')
    }

    const { productId } = await req.json();
    const baseUrl = process.env.API + "cart";

    const requestOptions = {
        method: "POST",
        headers: {
            ...CONTENT_TYPE,
            token: token?.token ||'',
        },
        body: JSON.stringify({ productId }),
    };

    try {
        const response = await fetch(baseUrl, requestOptions);
        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json({ error: "Failed to add product to cart" }, { status: response.status });
        }

        return NextResponse.json({ message: "Product added successfully", data });
    } 
    
    catch (error) {
        if (error) return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}


export async function GET(req: NextRequest) {

    const token = await getToken({ req }) || '';

    if (!token) {
        
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    
    const baseUrl = process.env.API + "cart";

    const requestOptions = {
        method: "GET",
        headers: {
            ...CONTENT_TYPE,
            token: token?.token ||'',
        },
    };

    try {
        const response = await fetch(baseUrl, requestOptions);
        const data = await response.json();

        if (!response.ok) {
            return NextResponse.json({ error: "Failed to add product to cart" }, { status: response.status });
        }

        return NextResponse.json({ ...data });
    } 
    
    catch (error) {
       if (error) return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}