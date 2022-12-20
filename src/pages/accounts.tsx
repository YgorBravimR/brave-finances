import { Backdrop, Box, Button, Fade, Modal, Typography } from "@mui/material";
import { Bank, Money, Coin, Plus } from "phosphor-react";
import { useState } from "react";
import { AccountCard } from "../components/AccountCard";
import { BalanceCard } from "../components/BalanceCard";
import { AccountsPageHeader, BalancesContainer, AccountsPageContainer, AccountsCardsContainer } from '../styles/pages/accounts'
import { ModalContainer } from '../components/NewTransactionSidebarButton/styles'
import { AccountForm } from "../components/AccountForm";

export default function Accounts() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <AccountsPageContainer>
      <AccountsPageHeader>
        <h2>Accounts</h2>
        <Button onClick={handleOpen}>
          <Plus weight="bold" />
        </Button>
        <Modal
          aria-labelledby="spring-modal-title"
          aria-describedby="spring-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
        >
          <Fade in={open}>
            <ModalContainer>
              <AccountForm />
            </ModalContainer>
          </Fade>
        </Modal>
      </AccountsPageHeader>

      <BalancesContainer>
        <BalanceCard icon={<Money size={32} />} iconColor='purple' title='Current Balance' value={300} to={'/'} />
        <BalanceCard icon={<Coin size={32} />} iconColor='green' title='Predicted Balance' value={300} to={'/'} />
      </BalancesContainer>

      <AccountsCardsContainer>
        <AccountCard account_name="NuBank" balance={200} icon={<Bank size={32} />} predicted_balance={200} />
        <AccountCard account_name="NuBank" balance={200} icon={<Bank size={32} />} predicted_balance={200} />
        <AccountCard account_name="NuBank" balance={200} icon={<Bank size={32} />} predicted_balance={200} />
        <AccountCard account_name="NuBank" balance={200} icon={<Bank size={32} />} predicted_balance={200} />
      </AccountsCardsContainer>
    </AccountsPageContainer>
  )
}




