"use client";
import Link from "next/link";
import BurgerMenu from "./BugerMenu";
import { useCookies } from "react-cookie";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Header() {
  const [cookies, setCookie, removeCookie] = useCookies(["JwtToken"]);
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  useEffect(() => {
    if (token) {
      const tokenString = Array.isArray(token) ? token[0] : token;
      const expirationDate = new Date();
      expirationDate.setDate(expirationDate.getDate() + 1);

      setCookie("JwtToken", tokenString, {
        path: "/",
        sameSite: "none",
        secure: true,
        expires: expirationDate,
      });
    }
  }, []);

  return (
    <header className="bg-background h-16 w-full flex justify-between fixed top-0">
      <Link href={"/"} className="h-16 w-40">
        <img className="h-full w-full p-2" src="/logo-no-background.png"></img>
      </Link>
      <BurgerMenu />
    </header>
  );
}
