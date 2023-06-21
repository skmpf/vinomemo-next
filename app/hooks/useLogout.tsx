import { useRouter } from "next/router";
import Cookies from "js-cookie";

type UseLogoutResponse = {
  logoutUser: () => void;
};

export const useLogout = (): UseLogoutResponse => {
  const router = useRouter();

  const logoutUser = () => {
    Cookies.remove("jwt");
    router.push("login");
  };

  return { logoutUser };
};
