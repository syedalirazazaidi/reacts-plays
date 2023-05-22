import { createContext, useReducer } from "react";
interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext({});

export const authReducer = (
  state: any,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

const AuthContextProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
