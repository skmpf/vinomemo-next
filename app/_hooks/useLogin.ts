import { useState } from "react";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { useToast } from "@chakra-ui/react";

type UseLoginResponse = {
  isLoading: boolean;
  loginUser: (email: string, password: string) => Promise<void>;
};

const VINOMEMO_API_URL = process.env.VINOMEMO_API_URL;

export const useLogin = (): UseLoginResponse => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();

  const loginUser = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${VINOMEMO_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setCookie("jwt", data.token);
      router.push("/notes");
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        toast({
          title: "Error",
          description: error.message,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error",
          description:
            "There was a problem logging you in, please try again later.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, loginUser };
};

export default useLogin;
