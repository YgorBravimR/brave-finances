import { Button, Card, Divider, Menu, MenuItem } from '@mui/material';
import { DotsThreeVertical } from 'phosphor-react';
import { ReactNode, useState } from 'react';

import { SeeMoreButton } from '../../shared/SeeMoreButton';
import { AccountCardContainer, AccountCardContent, BalanceContent, HeaderContent } from './styles';

interface AccountCardProps {
  icon: ReactNode;
  account_name: string;
  balance: string;
  predicted_balance: string;
  onClick: any
}

export function AccountCard({ icon, account_name, balance, predicted_balance, onClick }: AccountCardProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AccountCardContainer>
      <Card>
        <AccountCardContent>
          <HeaderContent>
            <div>
              {icon}
              <strong>{account_name}</strong>
            </div>
            <Button onClick={handleClick}>
              <DotsThreeVertical size={24} />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} sx={{ width: '80px' }}>Edit</MenuItem>
            </Menu>
          </HeaderContent>
          <BalanceContent>
            <p>Current balance</p>
            <span>{balance}</span>
          </BalanceContent>
          <BalanceContent>
            <p>Predicted balance</p>
            <span>{predicted_balance}</span>
          </BalanceContent>
        </AccountCardContent>
        <Divider />
        <SeeMoreButton onClick={onClick} text="new expense" />
      </Card>
    </AccountCardContainer>
  );
}



