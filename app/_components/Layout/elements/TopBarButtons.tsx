"use client";

import { usePathname } from "next/navigation";
import { Button, HStack, Link } from "@chakra-ui/react";

export const TopBarButtons = () => {
  const pathname = usePathname();

  return (
    <HStack spacing={{ base: 2, md: 4 }}>
      {pathname === "/" && (
        <>
          <Button as={Link} href="/login">
            Login
          </Button>
          <Button as={Link} href="/signup">
            Signup
          </Button>
        </>
      )}
      {pathname.includes("/notes") && (
        <>
          {/* <Button as={Link} href="/profile" >
              Profile
            </Button> */}
          <Button as={Link} href="/logout">
            Logout
          </Button>
        </>
      )}
    </HStack>
  );
};
