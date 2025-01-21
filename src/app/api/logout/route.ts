import { NextResponse } from "next/server";

export async function POST() {
  // Create a response to indicate successful logout
  const response = NextResponse.json({ message: "Logged out successfully" });

  // Remove the 'next-auth.session-token' cookie by setting it with an expired date
  const sesstionName =
    process.env.NODE_ENV === "production"
      ? "__Secure-next-auth.session-token"
      : "next-auth.session-token";

  response.cookies.set(sesstionName, "", {
    path: "/",
    expires: new Date(0),
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  // Return the response
  return response;
}
