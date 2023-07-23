import { redirect } from "next/navigation";
import jwt_decode from "jwt-decode";
import { UserLayout } from "../_components/Layout/UserLayout";
import { NotesList } from "./NotesList";
import { VINOMEMO_API_URL, authorize, getJwt } from "../_lib/authentication";
import { IUser } from "../_modules/user";
import { INote } from "../_modules/note";

type DecodedToken = {
  user: IUser;
};

export const metadata = {
  title: "VinoMemo - Notes",
};

const getNotes = async () => {
  try {
    const token = getJwt();
    const decoded: DecodedToken = jwt_decode(token as string);
    const userId = decoded?.user._id;

    const res = await fetch(`${VINOMEMO_API_URL}/users/${userId}/notes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error("Error fetching notes");
    const notes: INote[] = await res.json();
    notes.sort((a: INote, b: INote) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });
    return notes;
  } catch (error) {
    console.error(error);
  }
};

export default async function Notes() {
  const user = await authorize();
  !user && redirect("/login");
  const notes = await getNotes();

  return (
    <UserLayout>
      <NotesList notes={notes} />
    </UserLayout>
  );
}
