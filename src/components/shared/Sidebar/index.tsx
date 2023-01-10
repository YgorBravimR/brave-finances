import { Add, ChevronLeft , ChevronRight } from '@mui/icons-material/';
import { List } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Image from "next/image";
import { Bank, CreditCard, DotsThree, HouseLine, ListBullets } from 'phosphor-react';
import { useContext, useState } from 'react';

import logo from '../../../assets/logo.png'
import myBillsLogo from '../../../assets/mybills-logo-noBg.png'
import { SidebarContext } from '../../../contexts/SidebarContext';
import { NewTransactionSidebarButton } from './NewTransactionSidebarButton';
import { MaterialUiSidebarItem } from './SidebarMenu';
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
          <MaterialUiSidebarItem
            title="Dashboard"
            to="/dashboard"
            icon={<HouseLine size={iconSize} weight="thin" />}
            selected={selected}
            setSelected={setSelected}
          />
          <MaterialUiSidebarItem
            title="Accounts"
            to="/accounts"
            icon={<Bank size={iconSize} weight="thin" />}
            selected={selected}
            setSelected={setSelected}
          />
          <MaterialUiSidebarItem
            title="Transactions"
            to="/transactions"
            icon={<ListBullets size={iconSize} weight="thin" />}
            selected={selected}
            setSelected={setSelected}
          />
          <MaterialUiSidebarItem
            title="Credit cards"
            to="/credit-cards"
            icon={<CreditCard size={iconSize} weight="thin" />}
            selected={selected}
            setSelected={setSelected}
          />
          <MaterialUiSidebarItem
            title="Budgets"
            to="/budgets"
            icon={<ListBullets size={iconSize} weight="thin" />}
            selected={selected}
            setSelected={setSelected}
          />
          <MaterialUiSidebarItem
            title="More options"
            to="/others"
            icon={<DotsThree size={iconSize} weight="fill" />}
            selected={selected}
            setSelected={setSelected}
          />
        </List>
      </Drawer >
    </SidebarContainer>
  );
}
