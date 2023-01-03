import router from "next/router";
import { ReactNode, useContext } from "react";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { SidebarContext } from "../../../../contexts/SidebarContext";
import { SidebarMenuContainer } from "./styles";

interface ItemProps {
  title: string;
  to: string;
  icon: ReactNode;
  selected: string;
  setSelected(item: string): void;
}

export function MaterialUiSidebarItem({ title, to, icon, selected, setSelected }: ItemProps) {
  const { sidebarOpened } = useContext(SidebarContext)
  return (
    <SidebarMenuContainer>
      <ListItem key={title} sx={{
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <ListItemButton
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={() => { router.push(to), setSelected(title) }}
          selected={selected === title}
        >
          <ListItemIcon
            sx={{
              width: 80,
            }}
          >
            {icon}
          </ListItemIcon>
          {/* <ListItemText primary={title} sx={{ visibility: sidebarOpened ? 'initial' : 'hidden' }} /> */}
          <ListItemText primary={title} />
        </ListItemButton>
      </ListItem>
    </SidebarMenuContainer>
  )
}
