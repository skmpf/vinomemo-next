import { cookies } from "next/headers";

export const VINOMEMO_API_URL = process.env.VINOMEMO_API_URL;

export const authorize = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt")?.value;
  if (!token) return null;

  const res = await fetch(`${VINOMEMO_API_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) return null;

  return await res.json();
};