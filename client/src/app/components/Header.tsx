"use client";
import Link from "next/link";
import BurgerMenu from "./BugerMenu";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { User } from "../utils/types";

export default function Header() {
  const [cookies, setCookie, removeCookie] = useCookies(["JwtToken"]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (cookies.JwtToken && user == null) {
      const userToken: string = cookies.JwtToken;
      const user: User = jwtDecode(userToken);
      setUser(user);
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
