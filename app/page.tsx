import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Landing } from "./_components/Landing";
import { authorize } from "./_utils/authentication";

export const metadata: Metadata = {
  title: "VinoMemo - Better wine tasting notes",
  description:
    "VinoMemo is a wine tasting notes app. It helps you take notes quickly and easily by guiding you all the way.",
  keywords: "wine,notes,tasting",
  metadataBase: new URL("https://vinomemo.vercel.app/"),
  icons: {},
};

export default async function Home() {
  const user = await authorize();
  user && redirect("/notes");

  return (
    <>
      <Landing />
    </>
  );
}
