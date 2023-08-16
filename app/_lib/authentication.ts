import { cookies } from "next/headers";
import { IUser } from "@/_modules/user";

export const VINOMEMO_API_URL =
  process.env.VINOMEMO_API_URL || "http://localhost:3001";

export const getJwt = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt")?.value;
  if (!token) return null;
  return token;
};

export const authorize = async () => {
  const res = await fetch(`${VINOMEMO_API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${getJwt()}`,
    },
    cache: "no-store",
  });
  if (!res.ok) return null;
  return (await res.json()) as IUser;
};
