import EditButProvider from "../../contexts/EditButtonContext";
import SidebarProvider from "../../contexts/SidebarContext";
import StaticProvider from "../../contexts/StaticticsContext";
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
            <StaticProvider>
              <EditButProvider>
                <RootRouter />
              </EditButProvider>
            </StaticProvider>
          </SidebarProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </PostContextProvider>
  );
};

export default AppProvider;
