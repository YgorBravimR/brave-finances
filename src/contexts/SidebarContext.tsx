import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface SidebarContextType {
  sidebarOpened: boolean,
  setSidebarOpened: Dispatch<SetStateAction<boolean>>,
}

interface SidebarContextProviderProps {
  children: ReactNode;
}

export const SidebarContext = createContext({} as SidebarContextType)

export function SidebarContextProvider({ children }: SidebarContextProviderProps) {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  return (
    <SidebarContext.Provider value={{ sidebarOpened, setSidebarOpened }}>
      {children}
    </SidebarContext.Provider>
  )
}
