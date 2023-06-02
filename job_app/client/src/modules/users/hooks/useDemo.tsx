import axios from "axios";
import { useState } from "react";
import { useAuthContext } from "./useUser";

export const useDemo = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch }: any = useAuthContext();

  const demo = async () => {
    setIsLoading(true);
    setError(null);
    // // const response = await fetch("http://localhost:5000/api/v1/auth/login", {
    // //   method: "POST",
    // //   headers: { "Content-Type": "application/json" },
    // //   body: JSON.stringify({ email, password }),
    // // });
    // axios.get("/api/data", {
    //   params: {
    //     role: userRole,
    //   },
    // });
    // const json = await response;
    // if (!response.ok) {
    //   setIsLoading(false);
    //   setError(json.error);
    // }
    // if (response.ok) {
    //   // save the user to local storage
    //   localStorage.setItem("demo", JSON.stringify(json));
    //   // update the auth context
    //   dispatch({ type: "LOGIN", payload: json });
    //   // update loading state
    //   setIsLoading(false);
    // }
  };

  return { demo };
};
