import { UserLayout } from "@/app/_components/Layout/UserLayout";
import { authorize } from "@/app/_lib/authentication";

export const metadata = {
  title: `VinoMemo - Edit note`,
};

export default async function Note() {
  await authorize();

  return <UserLayout>hello</UserLayout>;
}
