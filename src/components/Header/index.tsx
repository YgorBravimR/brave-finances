import { CalendarButtonContainer, CoinsShopContainer, HeaderContainer, ProfileModalContainer } from "./styles";

import mybillsShop from '../../assets/mybills-shop.png'
import Image from "next/image";
import { Avatar, Button, Typography } from "@mui/material";

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { ProfileMenu } from "../ProfileMenu";

export function Header() {
  return (
    <HeaderContainer>
      {/* Mybills shop coins */}
      <CoinsShopContainer>
        <Button>
          <Image src={mybillsShop} alt="" width={32} height={32} />
          384
        </Button>
      </CoinsShopContainer>

      {/* Calendar buttom */}
      <CalendarButtonContainer>
        <Button variant="outlined" endIcon={<KeyboardArrowDownIcon />}>
          Novembro
        </Button>
      </CalendarButtonContainer>

      {/* Profile modal */}
      <ProfileModalContainer>
        <ProfileMenu />
      </ProfileModalContainer>
    </HeaderContainer>
  )
}
