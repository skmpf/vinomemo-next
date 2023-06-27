"use client";

import { useEffect } from "react";
import { Spinner } from "@chakra-ui/react";
import { UserLayout } from "../components/Layout/UserLayout";
import { useLogout } from "../hooks/useLogout";

export default function Logout() {
  const { isLoading, logoutUser } = useLogout();

  useEffect(() => {
    logoutUser();
  }, [logoutUser]);

  return <UserLayout>{isLoading && <Spinner color="brand.900" />}</UserLayout>;
}
