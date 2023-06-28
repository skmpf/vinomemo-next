"use client";

import Image from "next/image";
import { Box, Flex, Heading, Text, useTheme } from "@chakra-ui/react";

export const Landing = () => {
  const theme = useTheme();

  return (
    <Box
      px={{ base: 3, md: 10 }}
      display="flex"
      flexGrow={1}
      flexDirection="column"
      justifyContent="space-between"
    >
      <Flex flex={1} direction="column" justifyContent="center">
        <Heading
          as="h1"
          size={{ base: "2xl", md: "3xl" }}
          fontWeight="regular"
          mb={5}
        >
          Note down your wine tasting
          <br />
          <Text as="span" fontWeight="bold">
            easily & quickly
          </Text>
        </Heading>
        <Text fontSize={{ base: "lg", md: "2xl" }} fontStyle="italic">
          <Text as="span" fontFamily={theme.fonts.notoSerif}>
            VinoMemo
          </Text>{" "}
          is the perfect way to reference and remember your wine tastings.
        </Text>
      </Flex>
      <Flex width="100%" justifyContent="center">
        <Image
          src="/landing.svg"
          alt="Cheers"
          width={1000}
          height={500}
          priority
        />
      </Flex>
    </Box>
  );
};
