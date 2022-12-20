import { CalendarButtonContainer, CoinsShopContainer, HeaderContainer, ProfileModalContainer } from "./styles";

import mybillsShop from '../../assets/mybills-shop.png'
import Image from "next/image";
import { Avatar, Button, Typography } from "@mui/material";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { ProfileMenu } from "../ProfileMenu";

export function Header() {
  return (
    <HeaderContainer>
      <CoinsShopContainer>
        <Button>
          <Image src={mybillsShop} alt="" width={32} height={32} />
          384
        </Button>
      </CoinsShopContainer>

      <CalendarButtonContainer>
        <Button variant="outlined" endIcon={<KeyboardArrowDownIcon />}>
          Novembro
        </Button>
      </CalendarButtonContainer>

      <ProfileModalContainer>
        <ProfileMenu />
      </ProfileModalContainer>
    </HeaderContainer>
  )
}
