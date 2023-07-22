import { UserLayout } from "../_components/Layout/UserLayout";
import { SignupForm } from "./SignupForm";
import { SwitchToLogin } from "../_components/SwitchToLogin";
import { redirect } from "next/navigation";
import { authorize } from "../_lib/authentication";

export const metadata = {
  title: "VinoMemo - Sign up",
};

export default async function Signup() {
  const user = await authorize();
  user && redirect("/notes");

  return (
    <UserLayout
      title="Sign up with email"
      detail="Save your delicious wine tasting notes and access them anywhere by signing up for <b>VinoMemo</b>"
    >
      <SignupForm />
      <SwitchToLogin />
    </UserLayout>
  );
}
