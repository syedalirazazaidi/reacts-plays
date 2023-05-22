import { useAuthContext } from "./useUser";

export const useLogout = () => {
  const { dispatch }: any = useAuthContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
