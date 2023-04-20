import UserContextProvider from "../../modules/posts/Providers/UserContextProvider";
import RootRouter from "../routers/RootRouter";

const AppProvider = () => {
  return (
    <UserContextProvider>
      <RootRouter />
    </UserContextProvider>
  );
};

export default AppProvider;
