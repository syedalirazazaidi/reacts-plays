import React, { createContext, useState } from "react";
import { ISHow } from "../common/types/type";
interface ProductProviderProps {
  children: React.ReactNode;
}
export const SidebarContext = createContext({});
function StaticProvider({ children }: ProductProviderProps) {
  //   const [isOpen, isSetOpen] = useState<ISHow>(false);
  return <SidebarContext.Provider value='{}'>{children}</SidebarContext.Provider>;
}

export default StaticProvider;
