"use client";

import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

export const Home = () => {
  return (
    <Box
      paddingX={{ md: "43px" }}
      h="100%"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Heading
          as="h1"
          size={{ base: "2xl", md: "3xl" }}
          fontWeight="regular"
          mb="20px"
        >
          Note down your wine tasting
          <br />
          <Text as="span" fontWeight="bold">
            easily & quickly
          </Text>
        </Heading>
        <Text fontSize={{ base: "lg", md: "2xl" }} fontStyle="italic">
          Our note app is the perfect way to reference and remember your wine
          tastings.
        </Text>
      </Box>
      <VStack>
        <Image
          src="/landing.svg"
          alt="Cheers"
          width={1000}
          height={500}
          priority
        />
      </VStack>
    </Box>
  );
};
