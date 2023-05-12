import EditButProvider from "../../contexts/EditButtonContext";
import SidebarProvider from "../../contexts/SidebarContext";
import ThemeContextProvider, {
  ThemeContext,
} from "../../contexts/ThemeContext";
import PostContextProvider from "../../modules/posts/Providers/PostContextProvider";
import UserContextProvider from "../../modules/users/Providers/UserContextProvider";

import RootRouter from "../routers/RootRouter";

const AppProvider = () => {
  return (
    <PostContextProvider>
      <UserContextProvider>
        <ThemeContextProvider>
          <SidebarProvider>
            <EditButProvider>
              <RootRouter />
            </EditButProvider>
          </SidebarProvider>
        </ThemeContextProvider>
      </UserContextProvider>
    </PostContextProvider>
  );
};

export default AppProvider;
