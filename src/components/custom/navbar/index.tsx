'use client'
import AppLogo from "@/components/common/app-logo";
import SocialMediaLinks from "./components/social-media";
import NavbarMainLinks from "./components/navbar-links";
import { usePathname } from "next/navigation";
import { authPages } from "@/lib/utils/auth-pages.util";

export default function Navbar() {

const path = usePathname();

  return (
    <>
      <header className={`${authPages.includes(path) ? 'hidden' : ''} fixed top-0 w-full z-50 shadow-header py-2 bg-white`}>
        {/* Social Media & Special Offers Part */}
        <div className="w-full border-b py-2 hidden md:block">
          <div className="container mx-auto">
            <div className="w-full 2xl:w-[90%] mx-auto flex justify-between items-center ">
              <SocialMediaLinks />

              <p className="text-sm xl:text-md text-zinc-900">
                <strong className="tracking-[0.1em] text-zinc-900">Special Offer: </strong>
                Free Shipping on all the orders above $100
              </p>
            </div>

          </div>
        </div>

        {/* Navigation bar */}
        <div>
          <nav className="relative">
            <div className="container mx-auto px-5 md:px-0">
              <div className="w-full 2xl:w-[90%] mx-auto flex justify-between items-center">
                <AppLogo w={100} h={0} />

                <NavbarMainLinks />
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className={`${authPages.includes(path) ? 'hidden' : ''} h-[70px] md:h-[111px]`}></div>
    </>
  );
}
