"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { roboto, notoSerif } from "./fonts";

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
        },
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
    heading: notoSerif.style.fontFamily,
  },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
