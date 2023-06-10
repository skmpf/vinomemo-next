"use client";

import "./globals.css";
import { Container } from "@chakra-ui/react";
import { TopBar } from "./components/Layout/TopBar";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#FFF8F0" }}>
        <Providers>
          <Container maxW="8xl" h="100vh" display="flex" flexDirection="column">
            <TopBar />
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
