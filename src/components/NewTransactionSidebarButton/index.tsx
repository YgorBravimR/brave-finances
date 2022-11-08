import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NewTransactionMenuContainer } from './styles';

import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

type Props = {
  buttonText?: React.ReactNode
  startIcon?: React.ReactNode
}

export function NewTransactionSidebarButton({ buttonText, startIcon }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NewTransactionMenuContainer>
      <Button
        onClick={handleClick}
        variant="contained"
        startIcon={startIcon}
      >
        {buttonText}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          style: {
            width: '290px',
            borderRadius: '12px'
          }
        }}
      >
        <MenuItem
          onClick={handleClose}
        >
          <TrendingDownIcon color='error' />
          <p>Despesa</p>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
        >
          <TrendingUpIcon color='success' />
          <p>Receita</p>
        </MenuItem>
      </Menu>
    </NewTransactionMenuContainer>
  );
}