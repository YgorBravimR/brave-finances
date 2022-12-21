import router from "next/router";
import { ReactNode, useContext } from "react";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { SidebarContext } from "../../../../contexts/SidebarContext";

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
    <ListItem key={title} disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: 'center',
          px: 2.5,
          display: 'flex',
          gap: sidebarOpened ? 0 : 2,
        }}
        onClick={() => { router.push(to), setSelected(title) }}
        selected={selected === title}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: sidebarOpened ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={title} sx={{ opacity: sidebarOpened ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  )
}
