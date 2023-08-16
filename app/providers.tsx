import { ChakraThemeProvider } from "@/_providers/ChakraThemeProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraThemeProvider>{children}</ChakraThemeProvider>;
}
