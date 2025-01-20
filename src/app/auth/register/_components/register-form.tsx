/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { signUpSchema } from "@/lib/schemas/register.schema";
import { useFormik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { RegisterFields, signUp } from "../_actions/register.action";
import CustomButton from "../../_components/custom-button";


export default function RegisterForm() {

//States 
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [hideRePassword, setHideRePassword] = useState<boolean>(true);

  const RegisterHandler = async (fields: RegisterFields) => {

    setIsLoading(true);
    // console.log(console.log(fields));
    try {
      const payload = await signUp(fields);

      if (payload.message === 'success') 
        window.location.href = '/auth/login'

      else 
        setError(payload?.message)
    }

    catch (error) {
      throw new Error('Something Went wrong, try again')
    }

    finally {
      setIsLoading(false);
    }

  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema: signUpSchema,
    onSubmit: RegisterHandler,
  });

  return (
    <>
      <div className="p-10 relative z-10">
        <h2 className="mb-8 text-center text-2xl font-semibold">Sign Up</h2>

        <form onSubmit={formik.handleSubmit}>

          {/* Full Name Field */}  
          <div className="mb-3">
            <label htmlFor="name" className="text-[15px]">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="enter your name"
              className="w-full p-2.5 border border-[#bbb] outline-none placeholder:text-sm"
            />

            {/* Name Validation Error */}
            {formik.errors.name && formik.touched.name && (
              <div className="text-sm text-red-500 mt-1">
                {formik.errors.name}
              </div>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="text-[15px]">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="enter your email address"
              className="w-full p-2.5 border border-[#bbb] outline-none placeholder:text-sm"
            />

            {/* Email Validation Error */}
            {formik.errors.email && formik.touched.email && (
              <div className="text-sm text-red-500 mt-1">
                {formik.errors.email}
              </div>
            )}
          </div>

            {/* Password Field */}
            <div className="mb-3 relative">
              <label htmlFor="password" className="text-[15px]">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type={!hidePassword ? "text" : "password"}
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="••••••••"
                className="w-full p-2.5 border border-[#bbb] outline-none placeholder:text-sm"
              />

              
                {/* Show & Hide Password Icons */}
                <span className="absolute top-9 right-3 text-gray-500 cursor-pointer">
                  {
                  hidePassword ? 
                  <i className="fa-regular fa-eye" onClick={() => setHidePassword(false)}></i> :
                  <i className="fa-regular fa-eye-slash" onClick={() => setHidePassword(true)}></i>
                  }
                </span>

                {/* Password Validation Error */}
                {formik.errors.password && formik.touched.password && (
                <div className="text-sm text-red-500 mt-1">
                    {formik.errors.password}
                </div>
                )}
            </div>

            {/* Re-Password Field */}
            <div className="mb-3 relative">
              <label htmlFor="rePassword" className="text-[15px]">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <input
                type={!hideRePassword ? "text" : "password"}
                id="rePassword"
                value={formik.values.rePassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="••••••••"
                className="w-full p-2.5 border border-[#bbb] outline-none placeholder:text-sm"
              />


              {/* Show & Hide Password Icons */}
              <span className="absolute top-9 right-3 text-gray-500 cursor-pointer">
                {
                hideRePassword ? 
                <i className="fa-regular fa-eye" onClick={() => setHideRePassword(false)}></i> :
                <i className="fa-regular fa-eye-slash" onClick={() => setHideRePassword(true)}></i>
                }
              </span>

              {/* Re-Password Validation Error */}
              {formik.errors.rePassword && formik.touched.rePassword && (
                <div className="text-sm text-red-500 mt-1">
                    {formik.errors.rePassword}
                </div>
              )}
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

          {/* Remember me checkbox and forget passworg button */}
          <div className="flex justify-center items-center gap-1 text-sm">
            <p>Do you already have an account? </p>
            <Link
              href="/auth/login"
              className="underline font-semibold cursor-pointer"
            >
              Login
            </Link>
          </div>

        {/* Error Feedback Message */}
          {error && <p className="text-center text-[15px] text-red-600 transition-all my-5">{error}</p>}

          {/* Submit Button */}
          <CustomButton loading={isLoading} type={"submit"} title={"Create an Account"} styles="flex justify-center items-center w-full mt-5 py-2.5 text-center border border-[#bbb] hover:bg-black hover:text-white transition duration-300"/>

        </form>
      </div>
    </>
  );
}
