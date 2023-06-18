"use client";

import { Box, Link, Text, useTheme } from "@chakra-ui/react";
import NextLink from "next/link";

export const SwitchToLogin = () => {
  const theme = useTheme();

  return (
    <Box textAlign="center" mb={4}>
      <Text display="inline" fontSize="sm">
        Already have an account?
      </Text>{" "}
      <Link
        as={NextLink}
        href="/login"
        display="inline"
        fontSize="xs"
        fontWeight="bold"
        textTransform="uppercase"
        color="brand.900"
      >
        Login
      </Link>
    </Box>
  );
};
