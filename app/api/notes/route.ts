import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt_decode from "jwt-decode";
import { INote } from "@/app/_modules/note";

type DecodedToken = {
  user: {
    _id: string;
  };
};

const VINOMEMO_API_URL =
  process.env.VINOMEMO_API_URL || "http://localhost:3001";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get("jwt");
  if (!token) return null;

  const decoded: DecodedToken = jwt_decode(token.value);
  const userId = decoded?.user._id;

  const res = await fetch(`${VINOMEMO_API_URL}/users/${userId}/notes`, {
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });
  if (!res.ok) return null;
  const notes: INote[] = await res.json();

  return NextResponse.json(notes);
}
