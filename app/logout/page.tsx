"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { UserLayout } from "@/_components/Layout/UserLayout";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await fetch("/api/logout", {
          method: "POST",
        });
      } catch (err) {
        console.log(err);
      }
    };
    logoutUser();
    router.replace("/");
  }, [router]);

  return <UserLayout></UserLayout>;
}
