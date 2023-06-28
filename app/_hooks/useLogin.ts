import { useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

type UseLoginResponse = {
  isLoading: boolean;
  error: any;
  loginUser: (email: string, password: string) => Promise<void>;
};

const VINOMEMO_API_URL = process.env.VINOMEMO_API_URL;

export const useLogin = (): UseLoginResponse => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const router = useRouter();

  const loginUser = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${VINOMEMO_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();

      setCookie("jwt", data.token);

      router.push("/notes");
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

  return { isLoading, error, loginUser };
};

export default useLogin;
