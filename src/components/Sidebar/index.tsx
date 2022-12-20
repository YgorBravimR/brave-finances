import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useContext, useState } from 'react';

import Image from "next/image";
import myBillsLogo from '../../assets/mybills-logo-noBg.png'
import logo from '../../assets/logo.png'

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ListIcon from '@mui/icons-material/List';
import { Add } from '@mui/icons-material';
import { List } from '@mui/material';
import { NewTransactionSidebarButton } from '../NewTransactionSidebarButton';
import { MaterialUiSidebarItem } from './SidebarMenu';
import { SidebarButton, ButtonExpanded, ButtonContained } from './styles';
import { SidebarContext } from '../../contexts/SidebarContext';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
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

export default function Sidebar() {
  const [selected, setSelected] = useState('');
  const { sidebarOpened, setSidebarOpened } = useContext(SidebarContext)

  const handleOpenCloseDrawer = () => {
    setSidebarOpened(openClose => !openClose);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={sidebarOpened} >
        {sidebarOpened ? <Image src={myBillsLogo} width={140} height={60} alt="" /> : <Image src={logo} width={60} height={60} alt="" />}
        <DrawerHeader>
          <IconButton onClick={handleOpenCloseDrawer} >
            {sidebarOpened ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        {sidebarOpened ? (
          <SidebarButton>
            <ButtonExpanded>
              <NewTransactionSidebarButton buttonText="Novo" startIcon={<Add />} />
            </ButtonExpanded>
          </SidebarButton>
        ) : (
          <SidebarButton>
            <ButtonContained>
              <NewTransactionSidebarButton startIcon={<Add />} />
            </ButtonContained>
          </SidebarButton >
        )
        }
        <List>
          <MaterialUiSidebarItem
            title="Dashboard"
            to="/dashboard"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <MaterialUiSidebarItem
            title="Contas"
            to="/accounts"
            icon={<AccountBalanceIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <MaterialUiSidebarItem
            title="Transações"
            to="/transactions"
            icon={<ListIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </List>
      </Drawer >
    </Box >
  );
}
