import { UserLayout } from "@/app/_components/Layout/UserLayout";
import { Summary } from "./Summary";
import { authorize } from "@/app/_utils/authentication";

type Params = {
  id: string;
};

export const metadata = {
  title: `VinoMemo - View note`,
};

export default async function Note({ params }: { params: Params }) {
  await authorize();

  return (
    <UserLayout>
      <Summary id={params.id} />
    </UserLayout>
  );
}
