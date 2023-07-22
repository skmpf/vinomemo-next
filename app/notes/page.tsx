import { redirect } from "next/navigation";
import { UserLayout } from "../_components/Layout/UserLayout";
import { authorize } from "../_lib/authentication";
import { NotesList } from "./NotesList";

export const metadata = {
  title: "VinoMemo - Notes",
};

export default async function Notes() {
  const user = await authorize();
  !user && redirect("/login");

  return (
    <UserLayout>
      <NotesList />
    </UserLayout>
  );
}
