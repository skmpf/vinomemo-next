import { UserLayout } from "../components/Layout/UserLayout";
import { LoginForm } from "./LoginForm";
import { SwitchToReg } from "../components/SwitchToReg";

export default function Login() {
  return (
    <UserLayout
      title="Log in to <b>VinoMemo</b>"
      detail="Welcome back!<br/>Sign in with your email to continue"
    >
      <LoginForm />
      <SwitchToReg />
    </UserLayout>
  );
}
