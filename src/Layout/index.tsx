import { ReactElement } from "react";

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

import { LayoutContainer, MainContentLayout, ChildrenLayout } from "./styles";

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