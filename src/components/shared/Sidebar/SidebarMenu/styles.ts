import styled from "styled-components";

export const SidebarMenuContainer = styled.div`

.MuiButtonBase-root {
  padding-left: 0;
  padding-right: 0;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
}

.MuiListItemButton-root {
}

  .MuiListItem-root{

  .Mui-selected {
    border-left: 4px solid ${({theme}) => theme.colors.light.primary};
    border-right: 4px solid transparent;
}
}
`
