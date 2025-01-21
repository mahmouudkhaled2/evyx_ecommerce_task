'use client'

import { useState } from "react";
import { useFormik } from "formik";
// import { useContext, useState } from "react";
import { checkoutSchema } from "@/lib/schemas/checkout.schema";
// import { CartContext } from "@/lib/contexts/cart.context";
import CustomButton from "@/app/auth/_components/custom-button";
import { CONTENT_TYPE } from "@/lib/constants/api.constant";

type CheckoutFields = {
      details: string,
      phone: string,
      city: string
};
// {cartId} : {cardId: string}
export default  function CheckoutForm({cartId} : {cartId: string | undefined}) {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  // Function: Checkout Handler
  const checkoutHandler = async (fields: CheckoutFields) => {

    setIsLoading(true);

    try {

      const requestOptions = {
        method: "POST",
        headers: {
          ...CONTENT_TYPE,
        },
        body: JSON.stringify(fields),
      }
      const response = await fetch(`/api/${cartId}?url=${window.location.origin}`, requestOptions);

      const payload = await response.json();

      console.log('SEEEEE:', payload)
      
      if (payload.data.status === 'success') {
        window.location.href = payload.data.session.url;
        return;
      }

      if (!response.ok) {
        console.error("Error:", payload.message);
        throw new Error(payload.message || "Checkout Session Is Failed");
      } 

      

    }

    catch (error) {
      if (error) throw new Error('Somthing went wrong, try again');
    }
    
    finally {
      setIsLoading(false)
    }
    
  };

  const formik = useFormik({
    initialValues: { 
        details: '',
        phone: '',
        city: ''
    },
    validationSchema: checkoutSchema,
    onSubmit: checkoutHandler,
  });

  return (
    <>
      <div className="p-10 relative">
        <h2 className="mb-8 text-center text-2xl font-semibold">Shipping Address</h2>

        <form onSubmit={formik.handleSubmit}>
          {/* Details Field */}
          <div className="mb-5">
            <label htmlFor="details" className="text-[15px]">
             {" Address's Details"} <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="details"
              name="details"
              value={formik.values.details}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="enter your address's details"
              className="w-full p-2.5 border border-[#bbb] outline-none placeholder:text-sm"
            />

            {/* Details Validation Error */}
            {formik.errors.details && formik.touched.details && <div className="text-sm text-red-500 mt-1">{formik.errors.details}</div>}
          </div>

          {/* Phone Field */}
          <div className="mb-3">
            <label htmlFor="phone" className="text-[15px]">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="enter your phone number"
              className="w-full p-2.5 border border-[#bbb] outline-none placeholder:text-sm"
            />

            {/* Phone Validation Error */}
            {formik.errors.phone && formik.touched.phone && (
              <div className="text-sm text-red-500 mt-1">
                {formik.errors.phone}
              </div>
            )}
          </div>
          
          {/* City Field */}
          <div className="mb-5">
            <label htmlFor="city" className="text-[15px]">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="enter your city name"
              className="w-full p-2.5 border border-[#bbb] outline-none placeholder:text-sm"
            />

            {/* city Validation Error */}
            {formik.errors.city && formik.touched.city && <div className="text-sm text-red-500 mt-1">{formik.errors.city}</div>}
          </div>


          {/* Error Feedback Message */}
          {/* {error && <p className="text-center text-[15px] text-red-600 transition-all my-5">{error}</p>} */}

          {/* Submit Button */}
          <CustomButton loading={isLoading} type={"submit"} title={"Checkout"} styles="flex justify-center items-center w-full mt-5 py-2.5 text-center border border-[#bbb] hover:bg-black hover:text-white transition duration-300 mb-5"/>

        </form>
      </div>
    </>
  );
}
