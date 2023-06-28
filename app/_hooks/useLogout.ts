import { useState } from "react";
import { useRouter } from "next/navigation";

type UseLogoutResponse = {
  isLoading: boolean;
  error: any;
  logoutUser: () => Promise<void>;
};

export const useLogout = (): UseLogoutResponse => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const router = useRouter();

  const logoutUser = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/logout", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      router.push("/login");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, logoutUser };
};
