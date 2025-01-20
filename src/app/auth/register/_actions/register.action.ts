import { CONTENT_TYPE } from "@/lib/constants/api.constant";

export type RegisterFields = {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  phone: string;
};

export const signUp = async (fields: RegisterFields) => {

    const BASE_URL = 'https://ecommerce.routemisr.com/api/v1/auth/signup';

    const requestOptions = {
        method: 'POST',
        body: JSON.stringify(fields),
        headers: CONTENT_TYPE 
    }

    const response = await fetch(BASE_URL, requestOptions);

    const payload = await response.json();

    return payload;

}