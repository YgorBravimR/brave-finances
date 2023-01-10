import { ReactElement } from "react";

import { Header } from "../components/shared/Header";
import { Sidebar } from "../components/shared/Sidebar";
import { ChildrenLayout, LayoutContainer, MainContentLayout } from "./styles";


interface BaseLayoutProps {
  children: ReactElement;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <LayoutContainer>
      <Sidebar />
      <MainContentLayout>
        <Header />
        <ChildrenLayout>
          {children}
        </ChildrenLayout>
      </MainContentLayout>
    </LayoutContainer>
  )
}
