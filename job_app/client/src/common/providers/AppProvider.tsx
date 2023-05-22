import EditButProvider from "../../contexts/EditButtonContext";
import SidebarProvider from "../../contexts/SidebarContext";
import ThemeContextProvider, {
  ThemeContext,
} from "../../contexts/ThemeContext";
import PostContextProvider from "../../modules/posts/Providers/PostContextProvider";
import AuthContextProvider from "../../modules/users/Providers/UserContextProvider";

import RootRouter from "../routers/RootRouter";

const AppProvider = () => {
  return (
    <PostContextProvider>
      <AuthContextProvider>
        <ThemeContextProvider>
          <SidebarProvider>
            <EditButProvider>
              <RootRouter />
            </EditButProvider>
          </SidebarProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </PostContextProvider>
  );
};

export default AppProvider;
