"use client";

import { Button, Heading, HStack, useTheme } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const TopBar = () => {
  const theme = useTheme();

  return (
    <HStack
      px={{ base: 4, md: 24 }}
      py={{ base: 3, md: 5 }}
      justify="space-between"
    >
      <HStack as={Link} href="/" spacing={{ base: 3, md: 6 }}>
        <Image
          src="/logo.png"
          alt="VinoMemo logo"
          height={35}
          width={35}
          priority
        />
        <Heading
          fontSize={{ base: "xl", md: "3xl" }}
          fontFamily={theme.fonts.notoSerif}
          lineHeight={{ base: 3, md: 5 }}
          color="black"
        >
          Vino
          <br />
          Memo
        </Heading>
      </HStack>
      {/* TODO: Display buttons on unlogged pages */}
      <HStack spacing={{ base: 2, md: 4 }}>
        <Button as={Link} href="/login" size={{ base: "md", md: "lg" }}>
          Login
        </Button>
        <Button as={Link} href="/signup" size={{ base: "md", md: "lg" }}>
          Signup
        </Button>
      </HStack>
    </HStack>
  );
};
