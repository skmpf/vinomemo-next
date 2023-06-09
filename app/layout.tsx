"use client";

import { Providers } from "./providers";
import { Box, Button, Heading, HStack, Image } from "@chakra-ui/react";

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
            <HStack paddingX={10} paddingY={8} justify="space-between">
              <HStack spacing={6}>
                <Image
                  src="./logo.png"
                  alt="VinoMemo logo"
                  height="142px"
                  width="100px"
                />
                <Heading fontSize="48px" lineHeight="32px">
                  Vino
                  <br />
                  Memo
                </Heading>
              </HStack>

              <HStack>
                <Button size="lg">Login</Button>
                <Button size="lg">Signup</Button>
              </HStack>
            </HStack>
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
