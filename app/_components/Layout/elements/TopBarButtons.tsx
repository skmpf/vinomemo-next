"use client";

import { usePathname } from "next/navigation";
import { Button, HStack, Link } from "@chakra-ui/react";
import { isProtectedRoute, isPublicRoute } from "@/app/_modules/route";

export const TopBarButtons = () => {
  const pathname = usePathname();

  return (
    <HStack spacing={{ base: 2, md: 4 }}>
      {isPublicRoute(pathname) && (
        <>
          <Button as={Link} href="/login">
            Login
          </Button>
          <Button as={Link} href="/signup">
            Signup
          </Button>
        </>
      )}
      {isProtectedRoute(pathname) && (
        <Button as={Link} href="/logout">
          Logout
        </Button>
      )}
    </HStack>
  );
};
