import styled from '@emotion/styled'
import MuiDrawer from '@mui/material/Drawer';
import { CSSObject, Theme, styled as muiStyled } from '@mui/material/styles';

export const SidebarContainer = styled.div`
.MuiListItemIcon-root {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
}

img {
  margin-left: 10px;
  /* -webkit-animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
  animation: puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both; */
}
`

export const SidebarButton = styled.div`
.MuiButton-startIcon {
  margin: 0;
}
  button {
    margin-bottom: 2rem;
    height: 4rem;
    border-radius: 99px;

    text-transform: capitalize;
    font-family: 'Maven Pro';
    font-size: 1.25rem;

    box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
      0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);

    svg {
      height: 1.75rem;
      width: 1.75rem;
    }
  }
`

export const ButtonExpanded = styled.div`
  button {
    border-radius: 36px;
    width: 12rem;
    padding-left: 20px;
    margin-left: 0.715rem;

    display: flex;
    justify-content: flex-start;
    gap: 2.25rem;
  }
`

export const ButtonContained = styled.div`
  button {
    border-radius: 99px;
    height: 4rem;
    width: 4rem;
    min-width: 0;
    margin-top: 0;
    margin-right: auto;
    margin-left: auto;
    display: flex;

    svg{
      display: block;
      position: relative;
    }
  }
`

const drawerWidthOpen = 240;   // 15rem
const drawerWidthClosed = 80;  // 5rem

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidthOpen,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: drawerWidthClosed,
  display: 'flex',
});

export const DrawerHeader = muiStyled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  ...theme.mixins.toolbar,
}));


export const Drawer = muiStyled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidthOpen,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
