import { redirect } from "next/navigation";
import { UserLayout } from "../_components/Layout/UserLayout";
import { authorize } from "../_utils/authentication";
import { NotesList } from "./NotesList";

export default async function Notes() {
  const user = await authorize();
  !user && redirect("/login");

  return (
    <UserLayout>
      <NotesList />
    </UserLayout>
  );
}
