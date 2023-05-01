import PostContextProvider from "../../modules/posts/Providers/PostContextProvider";
import UserContextProvider from "../../modules/users/Providers/UserContextProvider";

import RootRouter from "../routers/RootRouter";

const AppProvider = () => {
  return (
    <PostContextProvider>
      <UserContextProvider>
        <RootRouter />
      </UserContextProvider>
    </PostContextProvider>
  );
};

export default AppProvider;
