"use client";

import { Heading, HStack, useTheme } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TopBarButtons } from "@/_components/Layout/elements/TopBarButtons";
import { isAdminRoute } from "@/_modules/route";

export const TopBar = () => {
  const theme = useTheme();
  const pathname = usePathname();

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
          style={{ width: "auto" }}
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
      {isAdminRoute(pathname) && (
        <Heading fontSize={{ base: "xl", md: "3xl" }}>Backoffice</Heading>
      )}
      <TopBarButtons />
    </HStack>
  );
};
