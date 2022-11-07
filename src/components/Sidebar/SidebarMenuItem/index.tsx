import { Button, Typography } from "@mui/material";
import { ReactNode } from "react";
import { MenuItem } from "react-pro-sidebar";
import { SidebarMenuItemContainer } from "./styles";

interface ItemProps {
  title: string;
  to: string;
  icon: ReactNode;
  selected: string;
  setSelected(item: string): void;
}
export function SidebarMenuItem({ title, to, icon, selected, setSelected }: ItemProps) {
  return (
    <SidebarMenuItemContainer>
      <Button>
        <MenuItem
          active={selected === title}
          onClick={() => setSelected(title)}
          icon={icon}
          href={to}
        >
          <Typography>{title}</Typography>
        </MenuItem>
      </Button>
    </SidebarMenuItemContainer>
  )
}
