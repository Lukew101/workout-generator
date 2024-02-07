"use client";
import { useEffect, useState } from "react";
import { User } from "../types";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";

export default function ProfileClient() {
  const [cookies, setCookie, removeCookie] = useCookies(["JwtToken"]);
  const [user, setUser] = useState<User>();
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const fetchUser= async () => {
    const cookieExpiration = new Date();
    cookieExpiration.setHours(cookieExpiration.getHours() + 8);

    const res = await fetch(`${BACKEND_URL}/user`, {
      credentials: "include",
    });

    const jwtToken = res.headers.get("IdToken");

    setCookie("JwtToken", jwtToken, {
      path: "/",
      sameSite: "none",
      secure: true,
      expires: cookieExpiration,
    });

    const data = await res.json();
    setUser(data);
  };

  useEffect(() => {
    if (!cookies.JwtToken) {
      fetchUser();
    }
  }, []);

  useEffect(() => {
    if (cookies.JwtToken && user == null) {
      const userToken: string = cookies.JwtToken;
      const user: User = jwtDecode(userToken);
      setUser(user);
    }
  }, [cookies.JwtToken]);

  return user ? (
    <div>
      <h2 className="mt-20">{user.name}</h2>
      <h2>{user.email}</h2>
      <img src={user.picture} alt={`${user.name} profile picture`} />
    </div>
  ) : (
    <h2>Please sign in</h2>
  );
}
