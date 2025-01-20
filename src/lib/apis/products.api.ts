

export default async function getAllProducts() {

    const response = await fetch('/api/products');

    const payload = await response.json();

    if (!response?.ok)  throw new Error("Faild to fetch products data");

    return payload
}   