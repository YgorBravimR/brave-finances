import { Button, Card, Divider, Menu, MenuItem } from '@mui/material';
import ProgressBar from '@ramonak/react-progress-bar';
import { DotsThreeVertical } from 'phosphor-react';
import { ReactNode, useState } from 'react';

import { theme } from '../../../styles/theme'
import { SeeMoreButton } from '../../shared/SeeMoreButton';
import { BodyContent, ClosingOnContent, CreditCardsCardContainer, CreditCardsCardContent, HeaderContent, LimitCompareContent, PartialValueContent, ProgressBarContainer, ProgressContainer } from './styles';

interface CreditCardsCardProps {
  network_icon: ReactNode;
  card_name: string;
  partial_value: string;
  closing_on: string;
  limit: string;
  onClick: () => void;
  avaiable_limit: string
  completed: number
}

export function CreditCardsCard({ completed, avaiable_limit, onClick, network_icon, card_name, partial_value, closing_on, limit }: CreditCardsCardProps) {
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
              <div>{network_icon}</div>
              <strong>{card_name}</strong>
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
              <strong>{`December ${closing_on}, 2023`}</strong>
            </ClosingOnContent>
            <ProgressContainer>
              <LimitCompareContent>
                <span>{partial_value}</span><span>{' '}de{' '}</span><span>{limit}</span>
              </LimitCompareContent>
              <ProgressBarContainer>
                <ProgressBar completed={completed} bgColor={`${theme.palette.creditCard.main}`} />
              </ProgressBarContainer>
                <span>Avaiable limit {avaiable_limit}</span>
              </ProgressContainer>
          </BodyContent>
        </CreditCardsCardContent>
        <Divider />
        <div id='btn__addExpense'>
          <SeeMoreButton text="add expense" onClick={onClick} />
        </div>
      </Card>
    </CreditCardsCardContainer>
  );
}



