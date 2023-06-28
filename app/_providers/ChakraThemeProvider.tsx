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
