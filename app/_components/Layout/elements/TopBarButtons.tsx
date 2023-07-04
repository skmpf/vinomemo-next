"use client";

import { usePathname } from "next/navigation";
import { Button, HStack, Link } from "@chakra-ui/react";

export const TopBarButtons = () => {
  const pathname = usePathname();

  return (
    <HStack spacing={{ base: 2, md: 4 }}>
      {pathname === "/" && (
        <>
          <Button as={Link} href="/login" size={{ base: "md", md: "lg" }}>
            Login
          </Button>
          <Button as={Link} href="/signup" size={{ base: "md", md: "lg" }}>
            Signup
          </Button>
        </>
      )}
      {pathname.includes("/notes") && (
        <>
          {/* <Button as={Link} href="/profile" size={{ base: "md", md: "lg" }}>
              Profile
            </Button> */}
          <Button as={Link} href="/logout" size={{ base: "md", md: "lg" }}>
            Logout
          </Button>
        </>
      )}
    </HStack>
  );
};
