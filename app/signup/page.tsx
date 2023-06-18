import { UserLayout } from "../components/Layout/UserLayout";
import { SwitchToLogin } from "../components/SwitchToLogin";

export default function Signup() {
  return (
    <UserLayout
      title="Sign up with email"
      detail="Save your delicious wine tasting notes and access them anywhere by signing up for <b>VinoMemo</b>"
    >
      <SwitchToLogin />
    </UserLayout>
  );
}
