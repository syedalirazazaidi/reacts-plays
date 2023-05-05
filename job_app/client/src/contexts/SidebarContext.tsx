import React, { createContext, useState } from "react";
import { ISHow } from "../common/types/type";
interface ProductProviderProps {
  children: React.ReactNode;
}
export const SidebarContext = createContext({});
function SidebarProvider({ children }: ProductProviderProps) {
  const [isOpen, isSetOpen] = useState<ISHow>(false);
  return (
    <SidebarContext.Provider value={{ isOpen, isSetOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export default SidebarProvider;
