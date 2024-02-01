"use client";
import { useEffect, useState } from "react";

type User = {
  name: string;
  email: string;
  profilePicture: string;
};


export default function ProfileClient() {
  const [user, setUser] = useState<User>();
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const fetchAuthStatus= async () => {
    const res = await fetch(`${BACKEND_URL}/user`, {
      credentials: "include",
    });
    const data = await res.json();
    setUser(data);
    console.log(data);
  }

  useEffect(() => {
    fetchAuthStatus();
  }, [])


  return (
    user && (
      <div>
        <h2 className="mt-20">{user.name}</h2>
        <h2>{user.email}</h2>
        <img src={user.profilePicture} alt={`${user.name} profile picture`} />
      </div>
    )
  );
}
