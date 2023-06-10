import { Noto_Serif, Roboto } from "next/font/google";

export const notoSerif = Noto_Serif({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
