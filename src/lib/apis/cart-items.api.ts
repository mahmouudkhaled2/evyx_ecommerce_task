
export default async function getAllCartItems() {

    const response = await fetch('/api/cart');

    const payload = await response.json();

    if (!response?.ok)  throw new Error("Faild to fetch products data");

    return payload
}   