import { Button, Heading, HStack } from "@chakra-ui/react";
import Image from "next/image";

export const TopBar = () => {
  return (
    <HStack paddingX={10} paddingY={8} justify="space-between">
      <HStack spacing={6}>
        <Image
          src="/logo.png"
          alt="VinoMemo logo"
          height={142}
          width={100}
          priority
        />
        <Heading fontSize="48px" lineHeight="32px" color="black">
          Vino
          <br />
          Memo
        </Heading>
      </HStack>

      <HStack spacing={4}>
        <Button size="lg">Login</Button>
        <Button size="lg">Signup</Button>
      </HStack>
    </HStack>
  );
};
