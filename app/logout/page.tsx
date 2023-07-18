"use client";

import { useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
import { UserLayout } from "../_components/Layout/UserLayout";
import { useLogout } from "../_hooks/useLogout";
import { useRouter } from "next/navigation";

export default function Logout() {
  const { isLoading, logoutUser } = useLogout();
  const router = useRouter();

  useEffect(() => {
    logoutUser();
    router.push("/login");
  }, [logoutUser, router]);

  return <UserLayout>{isLoading && <Spinner color="brand.900" />}</UserLayout>;
}
