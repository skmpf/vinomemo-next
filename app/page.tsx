import Head from "next/head";
import { redirect } from "next/navigation";
import { Landing } from "./_components/Landing";
import { authorize } from "./_utils/authentication";

export default async function Home() {
  const user = await authorize();
  user && redirect("/notes");

  return (
    <>
      <Head>
        <title>VinoMemo - Better wine tasting notes</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="VinoMemo is a wine tasting notes app. It helps you take notes quickly and easily by guiding you all the way."
        />
        <meta name="keywords" content="wine,notes,tasting" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://vinomemo.vercel.app/" />
      </Head>
      <Landing />
    </>
  );
}
