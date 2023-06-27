import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = cookies();
  cookieStore.delete("jwt");

  return new Response("User log out successful", {
    status: 200,
  });
}
