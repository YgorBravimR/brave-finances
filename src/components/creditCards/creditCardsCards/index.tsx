import { Button, Card, Divider, Menu, MenuItem } from '@mui/material';
import { ReactNode, useContext, useState } from 'react';
import { CreditCardsCardContent, HeaderContent, CreditCardsCardContainer, BodyContent, ProgressBar, ProgressContainer, PartialValueContent, AvaiableLimitContent, ClosingOnContent, LimitCompareContent } from './styles';
import { DotsThreeVertical } from 'phosphor-react';
import { SeeMoreButton } from '../../shared/SeeMoreButton';
import { TransactionsModalContext } from '../../../contexts/TransactionsModalContext';

interface CreditCardsCardProps {
  network_icon: ReactNode;
  card_name: string;
  partial_value: number;
  closing_on: string;
  limit: number;
  due_date: string;
  onClick: any;
}

export function CreditCardsCard({ onClick, network_icon, card_name, partial_value, closing_on, limit, due_date }: CreditCardsCardProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <CreditCardsCardContainer>
      <Card>
        <CreditCardsCardContent>
          <HeaderContent>
            <div>
              {network_icon}
              <p>{card_name}</p>
            </div>
            <Button onClick={handleClick}>
              <DotsThreeVertical size={24} />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Edit credit card</MenuItem>
              <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
          </HeaderContent>
          <BodyContent>
            <strong>Open invoice</strong>
            <PartialValueContent>
              <p>Partial value</p>
              <strong>{partial_value}</strong>
            </PartialValueContent>
            <ClosingOnContent>
              <p>Closing on</p>
              <strong>{closing_on}</strong>
            </ClosingOnContent>
            <ProgressContainer>
              <LimitCompareContent>
                <span>{partial_value}</span><span>{' '}de{' '}</span><span>{limit}</span>
              </LimitCompareContent>
              <ProgressBar />
              <AvaiableLimitContent>
                <span>Avaiable limit {'300,00'}</span>
                <p>Due date: {due_date}</p>
              </AvaiableLimitContent>
            </ProgressContainer>
          </BodyContent>
        </CreditCardsCardContent>
        <Divider />
        <SeeMoreButton text="new expense" onClick={onClick} />
      </Card>
    </CreditCardsCardContainer>
  );
}



