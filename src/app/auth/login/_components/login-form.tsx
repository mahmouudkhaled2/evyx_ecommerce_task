import Link from "next/link";
import LoginSchema from "@/lib/schemas/login.schema";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useState } from "react";
import CustomButton from "../../_components/custom-button";

type LoginFields = {
  email: string;
  password: string;
};

export default  function LoginForm() {

  //States 
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  
  const LoginHandler = async (fields: LoginFields) => {

    setIsLoading(true);

    try {

      const login = await signIn('credentials', {
        ...fields,
        redirect: false,
        callbackUrl: '/',
      })

      if (login?.ok) window.location.href = login.url || '/';

      else setError('Incorrect email or password')
      
    }

    catch (error) {
      if (error) throw new Error('Somthing went wrong, try again');
    }
    
    finally {
      setIsLoading(false)
    }
    
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: LoginSchema,
    onSubmit: LoginHandler,
  });

  return (
    <>
      <div className="p-10 relative z-20">
        <h2 className="mb-8 text-center text-2xl font-semibold text-zinc-900">Login</h2>

        <form onSubmit={formik.handleSubmit}>
          {/* Email Field */}
          <div className="mb-5">
            <label htmlFor="email" className="text-[15px] text-zinc-900">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="enter your email"
              className="w-full p-2.5 border border-[#bbb] outline-none text-zinc-900 placeholder:text-sm"
            />

            {/* Email Validation Error */}
            {formik.errors.email && formik.touched.email && <div className="text-sm text-red-500 mt-1">{formik.errors.email}</div>}
          </div>

          {/* Password Field */}
          <div className="mb-5 relative">
            <label htmlFor="password" className="text-[15px] text-zinc-900">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type={!hidePassword ? "text" : "password"}
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="••••••••"
              className="w-full p-2.5 border border-[#bbb] outline-none text-zinc-900 placeholder:text-sm"
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
            {formik.errors.password && formik.touched.password && <div className="text-sm text-red-500 mt-1">{formik.errors.password}</div>}
          </div>

          {/* Remember me checkbox and forget passworg button */}
          <div className="flex justify-between items-center text-[15px]">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                className="mr-1"
              />
              <label htmlFor="remember-me" className="text-zinc-900 text-sm md:text-md">Remember me</label>
            </div>

            <button className="text-zinc-900 text-sm md:text-md">Forgot your password?</button>
          </div>

          {/* Error Feedback Message */}
          {error && <p className="text-center text-[15px] text-red-600 transition-all my-5">{error}</p>}

          {/* Submit Button */}
          <CustomButton loading={isLoading} type={"submit"} title={"Log in"} styles="flex justify-center items-center w-full mt-5 py-2.5 text-center border border-[#bbb] hover:bg-black text-zinc-900 hover:text-white transition duration-300 mb-5"/>

          {/* if you don't have an account */}
          <div className="flex justify-center items-center gap-1 text-sm">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="text-zinc-900">Don't have an Account?</p>
            <Link href="/auth/register" className="underline font-semibold text-zinc-900">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
