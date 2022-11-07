import { useState } from "react";
import { Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Sidebar as ProSidebar } from "react-pro-sidebar";

import Add from '@mui/icons-material/Add';

import { Box, IconButton } from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ListIcon from '@mui/icons-material/List';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import ReceiptIcon from '@mui/icons-material/Receipt';
import BarChartIcon from '@mui/icons-material/BarChart';

import Image from "next/image";
import myBillsLogo from '../../assets/mybills-logo-noBg.png'
import logo from '../../assets/logo.png'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Button from '@mui/material/Button';

import { ButtonContained, ButtonExpanded, SidebarButton } from './styles';
import { SidebarMenuItem } from "./SidebarMenuItem";

export function Sidebar() {
  const { collapseSidebar, collapsed } = useProSidebar();
  const [selected, setSelected] = useState("Dashboard");

  return (
    <ProSidebar collapsedWidth="100px" width="260px" backgroundColor={"#FFFFFF"} style={{ height: '100vh' }}>
      <Box
        sx={{
          "& .menu-anchor": {
            backgroundColor: "transparent !important",
          },
          "& .active > .menu-anchor": {
            color: "#6514dd !important",
          },
        }}
      >

        <Menu>
          <MenuItem>
            {collapsed ? <Image src={logo} width={60} alt="" /> : <Image src={myBillsLogo} width={140} alt="" />}
          </MenuItem>

          <Box sx={{
            margin: "1rem 0",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
            {!collapsed ? (
              <SidebarButton>
                <ButtonExpanded>
                  <Button variant="contained" startIcon={< Add />} >
                    Novo
                  </Button>
                </ButtonExpanded>
              </SidebarButton>
            ) : (
              <SidebarButton>
                <ButtonContained>
                  <Button variant="contained">
                    < Add />
                  </Button>
                </ButtonContained>
              </SidebarButton>
            )
            }
            <IconButton
              onClick={() => collapseSidebar()}
              sx={{
                position: "absolute",
                right: 0,
                top: -30,
                boxShadow: "0px 3px 5px -1px rgb(0 0 0 / 20%)"
              }}
            >
              {collapsed ? <ArrowForwardIosIcon fontSize="small" /> : <ArrowBackIosIcon fontSize="small" />}
            </IconButton>
          </Box>

          <SidebarMenuItem
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <SidebarMenuItem
            title="Contas"
            to="/accounts"
            icon={<AccountBalanceIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <SidebarMenuItem
            title="Transações"
            to="/"
            icon={<ListIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <SidebarMenuItem
            title="Cartões de crédito"
            to="/"
            icon={<AccountBalanceWalletIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <SidebarMenuItem
            title="Planejamento"
            to="/"
            icon={<EmojiFlagsIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <SidebarMenuItem
            title="Relatórios"
            to="/"
            icon={<ReceiptIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <SidebarMenuItem
            title="Mais opções"
            to="/"
            icon={<BarChartIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Menu>
      </Box>
    </ProSidebar >
  );
}
