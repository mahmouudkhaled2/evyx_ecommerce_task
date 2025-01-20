import { NextResponse } from "next/server";

export async function GET () {

    const baseUrl = `https://ecommerce.routemisr.com/api/v1/products`;

    const response = await fetch(baseUrl);

    const payload = await response.json();

    if (!response?.ok) NextResponse.json({error: payload.message});

    return NextResponse.json(payload);
}