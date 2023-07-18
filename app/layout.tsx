import { Metadata } from "next";
import { TopBar } from "./_components/Layout/elements/TopBar";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "VinoMemo - Better wine tasting notes",
  description:
    "VinoMemo is a wine tasting notes app. It helps you take notes quickly and easily by guiding you all the way.",
  keywords: "wine,notes,tasting",
  metadataBase: new URL("https://vinomemo.vercel.app/"),
  icons: {
    icon: "/logo32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "#FFF8F0",
        }}
      >
        <Providers>
          <TopBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
