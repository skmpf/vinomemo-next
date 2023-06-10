"use client";

import { Box, Container } from "@chakra-ui/react";
import { TopBar } from "./components/Layout/TopBar";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box
            bg="brand.800"
            minH="100vh"
            position="fixed"
            top={0}
            bottom={0}
            left={0}
            right={0}
            overflow="auto"
          >
            <TopBar />
            {/* <Container maxW="container.md">{children}</Container> */}
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
