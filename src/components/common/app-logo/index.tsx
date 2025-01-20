import Image from "next/image";
import Logo from "./../../../../public/assets/images/main-logo.png";
import Link from "next/link";

type LogoProps = {
  w?: number;
  h?: number;
  className?: string;
};

export default function AppLogo({ w, h, className }: LogoProps) {
  return (
    <>
      <Link href="/">
        <Image
          src={Logo}
          alt="Logo of The Website"
          width={w}
          height={h}
          className={`${className}`}
        />
      </Link>
    </>
  );
}
