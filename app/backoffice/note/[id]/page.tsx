import { redirect } from "next/navigation";
import { UserLayout } from "@/_components/Layout/UserLayout";
import { VINOMEMO_API_URL, authorize, getJwt } from "@/_lib/authentication";
import { NoteForm } from "@/_components/NoteForm/NoteForm";
import { INote } from "@/_modules/note";

type Params = {
  id: string;
};

export const metadata = {
  title: "VinoMemo - Backoffice Note",
};

export default async function Note({ params }: { params: Params }) {
  const me = await authorize();
  !me?.isAdmin && redirect("/notes");

  const getNote = async () => {
    try {
      const token = getJwt();
      const res = await fetch(`${VINOMEMO_API_URL}/notes/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Error fetching note");
      return (await res.json()) as INote | null;
    } catch (error) {
      console.error(error);
    }
  };
  const note = await getNote();

  return (
    <UserLayout>
      <NoteForm note={note} />
    </UserLayout>
  );
}
