"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button, HStack, Link } from "@chakra-ui/react";
import { isProtectedRoute, isPublicRoute } from "@/_modules/route";
import { IUser } from "@/_modules/user";
import api from "@/_modules/api";

export const TopBarButtons = () => {
  const pathname = usePathname();
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await api.getCurrentUser();
      user && setUser(user);
    };
    pathname.includes("/notes") && fetchUser();
  }, [pathname]);

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
        <>
          {user?.isAdmin && (
            <Button as={Link} href="/backoffice">
              Backoffice
            </Button>
          )}
          {pathname.includes("/backoffice") && (
            <Button as={Link} href="/notes">
              Notes
            </Button>
          )}
          <Button as={Link} href="/logout">
            Logout
          </Button>
        </>
      )}
    </HStack>
  );
};
