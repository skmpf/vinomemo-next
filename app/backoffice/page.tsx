import { redirect } from "next/navigation";
import { UserLayout } from "@/_components/Layout/UserLayout";
import { authorize } from "@/_lib/authentication";
import Home from "@/backoffice/Home";

export const metadata = {
  title: "VinoMemo - Backoffice",
};

export default async function Backoffice() {
  const user = await authorize();
  !user?.isAdmin && redirect("/notes");

  return (
    <UserLayout>
      <Home />
    </UserLayout>
  );
}
