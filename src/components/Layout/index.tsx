import { ReactElement } from "react";
import { Sidebar } from "../Sidebar";

interface BaseLayoutProps {
  children: ReactElement;
}

export function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    }}>
      <>
        <Sidebar />
        {children}
      </>
    </div>
  )
}