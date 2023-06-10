import { Button, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export const TopBar = () => {
  return (
    <HStack
      paddingX={{ base: 1, md: 10 }}
      paddingY={{ base: 3, md: 6 }}
      justify="space-between"
    >
      <HStack spacing={{ base: 3, md: 6 }}>
        <Image
          src="/logo.png"
          alt="VinoMemo logo"
          height={35}
          width={35}
          priority
        />
        <Heading
          fontSize={{ base: "xl", md: "3xl" }}
          lineHeight={{ base: "13px", md: "20px" }}
          color="black"
        >
          Vino
          <br />
          Memo
        </Heading>
      </HStack>
      <HStack spacing={{ base: 2, md: 4 }}>
        <Link href="/login">
          <Button size={{ base: "md", md: "lg" }}>Login</Button>
        </Link>
        <Link href="/signup">
          <Button size={{ base: "md", md: "lg" }}>Signup</Button>
        </Link>
      </HStack>
    </HStack>
  );
};
