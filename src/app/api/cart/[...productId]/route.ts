import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { CONTENT_TYPE } from "@/lib/constants/api.constant";

export async function PUT(req: NextRequest, {params}: {params: {productId: string}}) {

    const token = await getToken({ req }) || '';

    if (!token) {
        
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const {productId} = params;
    const { count } = await req.json();
    const baseUrl = `${process.env.API}cart/${productId[0]}`;

    const requestOptions = {
        method: "PUT",
        headers: {
            ...CONTENT_TYPE,
            token: token?.token ||'',
        },
        body: JSON.stringify({ count }),
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


export async function DELETE(req: NextRequest, {params}: {params: {productId: string}}) {

    const token = await getToken({ req }) || '';
    
    if (!token) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    
    const {productId} = params;
    const baseUrl = `${process.env.API}cart/${productId[0]}`;

    const requestOptions = {
        method: "DELETE",
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

        return NextResponse.json({ message: "Product added successfully", data });
    } 
    
    catch (error) {
       if (error) return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}