import { Button, Card, Divider, Menu, MenuItem } from '@mui/material';
import ProgressBar from '@ramonak/react-progress-bar';
import { DotsThreeVertical } from 'phosphor-react';
import { ReactNode, useState } from 'react';

import { SeeMoreButton } from '../../shared/SeeMoreButton';
import { AvaiableLimitContent, BodyContent, ClosingOnContent, CreditCardsCardContainer, CreditCardsCardContent, HeaderContent, LimitCompareContent, PartialValueContent, ProgressBarContainer, ProgressContainer } from './styles';

interface CreditCardsCardProps {
  network_icon: ReactNode;
  card_name: string;
  partial_value: string;
  closing_on: string;
  limit: string;
  due_date: string;
  onClick: any;
  avaiable_limit: string
  completed: number
}

export function CreditCardsCard({ completed, avaiable_limit, onClick, network_icon, card_name, partial_value, closing_on, limit, due_date }: CreditCardsCardProps) {
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
              <ProgressBarContainer>
                <ProgressBar completed={completed} bgColor="#00796b" />
              </ProgressBarContainer>
              <AvaiableLimitContent>
                <span>Avaiable limit {avaiable_limit}</span>
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



