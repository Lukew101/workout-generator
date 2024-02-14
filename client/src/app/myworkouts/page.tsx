"use client";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";
import { User } from "../utils/types";
import { fetchUsersPorgrams } from "../functions/httpFunctions";

export default function ProfileClient() {
  const [cookies, setCookie, removeCookie] = useCookies(["JwtToken"]);
  const [user, setUser] = useState<User>();
  const [programs, setPrograms] = useState<any>();

  // const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  // const fetchUser = async () => {
  //   const cookieExpiration = new Date();
  //   cookieExpiration.setHours(cookieExpiration.getHours() + 8);

  //   const res = await fetch(`${BACKEND_URL}/user`, {
  //     credentials: "include",
  //   });

  //   const jwtToken = res.headers.get("IdToken");

  //   setCookie("JwtToken", jwtToken, {
  //     path: "/",
  //     sameSite: "none",
  //     secure: true,
  //     expires: cookieExpiration,
  //   });
  // };

  // useEffect(() => {
  //   if (!cookies.JwtToken) {
  //     fetchUser();
  //   }
  // }, []);

  const fetchUserPrograms = async () => {
    const programs: any = await fetchUsersPorgrams(cookies.JwtToken);
    console.log(programs);
    setPrograms(programs);
  };

  useEffect(() => {
    if (cookies.JwtToken && user == null) {
      const userToken: string = cookies.JwtToken;
      const user: User = jwtDecode(userToken);
      setUser(user);
    }
  }, [cookies.JwtToken]);

  useEffect(() => {
    if (user) {
      fetchUserPrograms();
    }
  }, [user]);

  return user ? (
    <>
      <div>
        <h2 className="mt-20">{user.name}</h2>
        <h2>{user.email}</h2>
        <img src={user.picture} alt={`${user.name} profile picture`} />
      </div>
      {programs && (
        <div>
          <h2>My Programs</h2>
          {programs.map((program: any, index: number) => (
            <div key={index}>
              <h3>{program.name}</h3>
            </div>
          ))}
        </div>
      
      )}
    </>
  ) : (
    <a href="http://localhost:8080/oauth2/authorization/okta">Please sign in</a>
  );
}
