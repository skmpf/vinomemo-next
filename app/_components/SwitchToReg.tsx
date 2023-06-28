"use client";

import { Box, Link, Text, useTheme } from "@chakra-ui/react";
import NextLink from "next/link";

export const SwitchToReg = () => {
  const theme = useTheme();

  return (
    <Box textAlign="center" mb={4}>
      <Text display="inline" fontSize="sm">
        Not registered on{" "}
        <Text as="span" fontFamily={theme.fonts.notoSerif}>
          VinoMemo
        </Text>{" "}
        yet?
      </Text>{" "}
      <Link
        as={NextLink}
        href="/signup"
        display="inline"
        fontSize="xs"
        fontWeight="bold"
        textTransform="uppercase"
        color="brand.900"
      >
        Signup
      </Link>
    </Box>
  );
};
