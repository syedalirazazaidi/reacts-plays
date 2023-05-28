import EditButProvider from "../../contexts/EditButtonContext";
import MonthlyProvider from "../../contexts/MonthlyContext";
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
                <MonthlyProvider>
                  <RootRouter />
                </MonthlyProvider>
              </EditButProvider>
            </StaticProvider>
          </SidebarProvider>
        </ThemeContextProvider>
      </AuthContextProvider>
    </PostContextProvider>
  );
};

export default AppProvider;
