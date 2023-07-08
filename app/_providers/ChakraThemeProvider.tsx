"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { roboto, notoSerif } from "../fonts";

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  components: {
    Button: {
      variants: {
        solid: {
          color: "brand.900",
          bg: "white",
          _hover: { color: "#FFF8F0", bg: "#9c204d" },
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        },
      },
    },
    Heading: {
      baseStyle: {
        color: "brand.900",
      },
    },
    Text: {
      baseStyle: {
        color: "brand.900",
      },
    },
  },
  colors: {
    brand: {
      900: "#C94264",
      800: "#FFF8F0",
    },
    wine: {
      50: "#ffe7f0",
      100: "#f3c1ce",
      200: "#e59bae",
      300: "#d8738d",
      400: "#cc4d6d",
      500: "#b33353",
      600: "#8c2741",
      700: "#651a2e",
      800: "#3e0e1c",
      900: "#1c0108",
    },
  },
  fonts: {
    body: roboto.style.fontFamily,
    notoSerif: notoSerif.style.fontFamily,
  },
});

export function ChakraThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
