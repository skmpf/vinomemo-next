import { useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

type UseSignupResponse = {
  isLoading: boolean;
  error: any;
  signupUser: (name: string, password: string, email: string) => Promise<void>;
};

const VINOMEMO_API_URL = process.env.VINOMEMO_API_URL;

export const useSignup = (): UseSignupResponse => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(null);
  const router = useRouter();

  const signupUser = async (name: string, password: string, email: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${VINOMEMO_API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password, email }),
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

  return { isLoading, error, signupUser };
};

export default useSignup;
