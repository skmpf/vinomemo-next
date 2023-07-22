import { redirect } from "next/navigation";
import { Landing } from "./_components/Landing";
import { authorize } from "./_lib/authentication";

export default async function Home() {
  const user = await authorize();
  user && redirect("/notes");

  return (
    <>
      <Landing />
    </>
  );
}
