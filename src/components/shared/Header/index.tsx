import Image from 'next/image'
import { useContext, useState } from 'react';
import mybillsShop from '../../../assets/mybills-shop.png'
import { KeyboardArrowDown } from '@mui/icons-material';
import { Avatar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { CalendarButtonContainer, CoinsShopContainer, HeaderContainer, ProfileModalContainer, } from './styles'
import { AuthContext } from '../../../contexts/AuthContext';
import { SidebarContext } from '../../../contexts/SidebarContext';

export function Header() {
  const { singOut, user } = useContext(AuthContext)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderContainer>
      <CoinsShopContainer>
        <Button>
          <Image src={mybillsShop} alt="" width={32} height={32} />
          384
        </Button>
      </CoinsShopContainer>

      <CalendarButtonContainer>
        <Button variant="outlined" endIcon={<KeyboardArrowDown />}>
          Novembro
        </Button>
      </CalendarButtonContainer>

      <ProfileModalContainer>
        <div>
          <Button
            onClick={handleClick}
            startIcon={<Avatar src="https://avatars.githubusercontent.com/ygorbravimr" />}
            endIcon={<KeyboardArrowDown />}
          >
            <Typography>
              {user?.fullname}
            </Typography>
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} sx={{ width: "180px" }}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={singOut}>Logout</MenuItem>
          </Menu>
        </div>
      </ProfileModalContainer>
    </HeaderContainer>
  )
}
