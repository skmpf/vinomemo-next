import { redirect } from "next/navigation";
import { UserLayout } from "@/_components/Layout/UserLayout";
import { authorize } from "@/_lib/authentication";
import { NoteForm } from "@/_components/NoteForm/NoteForm";

export const metadata = {
  title: "VinoMemo - New note",
};

export default async function CreateNote() {
  const user = await authorize();
  !user && redirect("/login");

  return (
    <UserLayout>
      <NoteForm />
    </UserLayout>
  );
}
