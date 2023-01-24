import { Add, ChevronLeft , ChevronRight } from '@mui/icons-material/';
import { List } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Image from "next/image";
import router from 'next/router';
import { Bank, CreditCard, DotsThree, HouseLine, ListBullets } from 'phosphor-react';
import { useContext, useState } from 'react';

import logo from '../../../assets/logo.png'
import myBillsLogo from '../../../assets/mybills-logo-noBg.png'
import { SidebarContext } from '../../../contexts/SidebarContext';
import { NewTransactionSidebarButton } from './NewTransactionSidebarButton';
import { MenuItemLink } from './SidebarMenu/MenuItemLink';
import { ButtonContained, ButtonExpanded, Drawer, DrawerHeader, SidebarButton, SidebarContainer } from './styles';



export function Sidebar() {
  const [selected, setSelected] = useState('');
  const { sidebarOpened, setSidebarOpened } = useContext(SidebarContext)

  const handleOpenCloseDrawer = () => {
    setSidebarOpened(openClose => !openClose);
  };

  const iconSize = 24

  return (
    <SidebarContainer>
      <Drawer variant="permanent" open={sidebarOpened} >
        {sidebarOpened ? <Image src={myBillsLogo} width={140} height={60} alt="" /> : <Image src={logo} width={60} height={60} alt="" />}
        <DrawerHeader>
          <IconButton className='openSidebarButton' onClick={handleOpenCloseDrawer} >
            {sidebarOpened ? <ChevronLeft /> : <ChevronRight />}
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
          <MenuItemLink
            title="Dashboard"
            onClick={() => router.push("/dashboard")}
            icon={<HouseLine size={iconSize} weight="thin" />}
            selected={selected}
            setSelected={setSelected}
          />
          <MenuItemLink
            title="Accounts"
            onClick={() => router.push("/accounts")}
            icon={<Bank size={iconSize} weight="thin" />}
            selected={selected}
            setSelected={setSelected}
          />
          <MenuItemLink
            title="Transactions"
            onClick={() => router.push("/transactions")}
            icon={<ListBullets size={iconSize} weight="thin" />}
            selected={selected}
            setSelected={setSelected}
          />
          <MenuItemLink
            title="Credit cards"
            onClick={() => router.push("/credit-cards")}
            icon={<CreditCard size={iconSize} weight="thin" />}
            selected={selected}
            setSelected={setSelected}
          />
          {/* <MenuItemLink
            title="Budgets"
            to="/budgets"
            icon={<ListBullets size={iconSize} weight="thin" />}
            selected={selected}
            setSelected={setSelected}
          /> */}
          <MenuItemLink
            title="More options"
            onClick={() => router.push("/others")}
            icon={<DotsThree size={iconSize} weight="fill" />}
            selected={selected}
            setSelected={setSelected}
          />
        </List>
      </Drawer >
    </SidebarContainer>
  );
}
