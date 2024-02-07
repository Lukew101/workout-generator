"use client";
import Link from "next/link";
import BurgerMenu from "./BugerMenu";
import { useCookies } from "react-cookie";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "../types";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function Header() {
  const [cookies, setCookie, removeCookie] = useCookies(["JwtToken"]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (cookies.JwtToken) {
      const fetchUserDetails = async () => {
        const res = await fetch(`${BACKEND_URL}/user`, {
          credentials: "include",
        });

        const data = await res.json();
        setUser(data);
      };

      fetchUserDetails();
    }
  }, [cookies.JwtToken]);

  return (
    <header className="bg-background h-16 w-full flex justify-between fixed top-0 z-10">
      <Link href={"/"} className="h-16 w-40">
        <img className="h-full w-full p-2" src="/logo-no-background.png"></img>
      </Link>
      <BurgerMenu user={user} />
    </header>
  );
}
