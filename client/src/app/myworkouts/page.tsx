"use client";

import { useEffect, useState } from "react";


export default function ProfileClient() {
  const [email, setEmail] = useState<string>("");
  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const fetchAuthStatus= async () => {
    const res = await fetch(`${BACKEND_URL}/user`, {
      credentials: "include",
    });
    const data = await res.text();
    setEmail(data);
    console.log(data);
  }

  useEffect(() => {
    fetchAuthStatus();
  }, [])


  return (
    email && (
      <div>
        <h2 className="mt-20">{email}</h2>
      </div>
    )
  );
}
