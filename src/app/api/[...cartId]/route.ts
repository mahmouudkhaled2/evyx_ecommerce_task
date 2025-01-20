import { CONTENT_TYPE } from "@/lib/constants/api.constant";
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

type RequestParams = {
  params: { cartId: string };
};

export async function POST(req: NextRequest, { params }: RequestParams) {
    const token = await getToken({ req });

  if (!token) {
    console.error("Error: Unauthenticated");
    return NextResponse.json({ error: "Unauthenticated" }, { status: 401 });
  }

  const { cartId } = params;
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  try {

    const body = await req.json();

    const baseUrl = `${process.env.API}orders/checkout-session/${cartId}?url=${url}`;

    const requestOptions = {
      method: "POST",
      headers: {
        token: token?.token || '',
        ...CONTENT_TYPE,
      },
      body: JSON.stringify(body),
    };


    const response = await fetch(baseUrl, requestOptions);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return NextResponse.json({ message: "success", data });
  } 
  
  catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
