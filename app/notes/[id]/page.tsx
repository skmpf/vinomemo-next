import { UserLayout } from "@/_components/Layout/UserLayout";
import { Summary } from "@/notes/[id]/Summary";
import { VINOMEMO_API_URL, authorize, getJwt } from "@/_lib/authentication";
import { INote } from "@/_modules/note";

type Params = {
  id: string;
};

export const metadata = {
  title: `VinoMemo - View note`,
};

const getNote = async (id: string) => {
  try {
    const token = getJwt();
    const res = await fetch(`${VINOMEMO_API_URL}/notes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Error fetching note");
    return (await res.json()) as INote;
  } catch (error) {
    console.error(error);
  }
};

export default async function Note({ params }: { params: Params }) {
  await authorize();
  const note = await getNote(params.id);

  return (
    <UserLayout>
      <Summary note={note} />
    </UserLayout>
  );
}
