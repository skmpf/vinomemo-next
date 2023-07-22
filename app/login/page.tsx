import { UserLayout } from "../_components/Layout/UserLayout";
import { LoginForm } from "./LoginForm";
import { SwitchToReg } from "../_components/SwitchToReg";
import { redirect } from "next/navigation";
import { authorize } from "../_lib/authentication";

export const metadata = {
  title: "VinoMemo - Log in",
};

export default async function Login() {
  const user = await authorize();
  user && redirect("/notes");

  return (
    <UserLayout
      title="Log in to <b>VinoMemo</b>"
      detail="Welcome back! Sign in with your email to continue"
    >
      <LoginForm />
      <SwitchToReg />
    </UserLayout>
  );
}
