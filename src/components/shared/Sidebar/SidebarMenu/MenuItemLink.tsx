import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ReactNode } from "react";

import { SidebarMenuContainer } from "./styles";

interface ItemProps {
  title: string;
  onClick: () => void;
  icon: ReactNode;
  selected: string;
  setSelected(item: string): void;
}

export function MenuItemLink({ title, onClick, icon, selected, setSelected }: ItemProps) {
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
          onClick={() => { setSelected(title), onClick() }}
          selected={selected === title}
        >
          <ListItemIcon
            sx={{
              width: 80,
            }}
          >
            {icon}
          </ListItemIcon>
          <ListItemText primary={title} />
        </ListItemButton>
      </ListItem>
    </SidebarMenuContainer>
  )
}
