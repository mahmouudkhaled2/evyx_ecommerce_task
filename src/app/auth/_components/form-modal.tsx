'use client'
import CheckoutForm from "@/app/cart/[cartId]/checkout/_components/checkout-form";
import LoginForm from "../login/_components/login-form";
import RegisterForm from "../register/_components/register-form";

type FormModalProps = {
  form: 'login' | 'register' | 'checkout';
 id?: string | undefined;
}
export default function FormModal({form , id} : FormModalProps) {
  
  return (
    <>
      <div className={`login-modal relative w-full md:max-w-lg bg-white rounded-lg bg-no-repeat bg-cover bg-center overflow-hidden`}>
        <div className="modal-overlay absolute w-full h-full bg-white bg-opacity-90"></div>
          {form === 'login' && <LoginForm/>}
          {form === 'register' && <RegisterForm/>}
          {form === 'checkout' && <CheckoutForm cartId={id} />}
      </div>
    </>
  )
}
