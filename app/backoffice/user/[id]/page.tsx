import { redirect } from "next/navigation";
import { UserLayout } from "../../../_components/Layout/UserLayout";
import {
  VINOMEMO_API_URL,
  authorize,
  getJwt,
} from "../../../_lib/authentication";
import { SignupForm } from "@/app/signup/SignupForm";
import { IUser } from "@/app/_modules/user";

type Params = {
  id: string;
};

export const metadata = {
  title: "VinoMemo - Backoffice User",
};

export default async function User({ params }: { params: Params }) {
  const me = await authorize();
  !me?.isAdmin && redirect("/notes");

  const getUser = async () => {
    try {
      const token = getJwt();
      const res = await fetch(`${VINOMEMO_API_URL}/users/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) throw new Error("Error fetching user");
      return (await res.json()) as IUser | null;
    } catch (error) {
      console.error(error);
    }
  };
  const user = await getUser();

  return (
    <UserLayout>
      <SignupForm user={user} />
    </UserLayout>
  );
}
