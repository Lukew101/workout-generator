"use client";
import { useEffect, useState } from "react";
import { User } from "../types";
import { useCookies } from "react-cookie";

export default function ProfileClient() {
  const [cookies, setCookie, removeCookie] = useCookies(["JwtToken"]);
  const [user, setUser] = useState<User>();
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const fetchUserDetails = async () => {
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
    fetchUserDetails();
  }, []);

  return user ? (
    <div>
      <h2 className="mt-20">{user.name}</h2>
      <h2>{user.email}</h2>
      <img src={user.profilePicture} alt={`${user.name} profile picture`} />
    </div>
  ) : (
    <h2>Please sign in</h2>
  );
}
