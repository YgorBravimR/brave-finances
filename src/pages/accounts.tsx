import { useState } from "react";
import { Button, Fade, Modal } from "@mui/material";
import { Bank, Money, Coin, Plus } from "phosphor-react";
import { AccountsPageHeader, BalancesContainer, AccountsPageContainer, AccountsCardsContainer, AccountsPageBody } from '../styles/pages/accounts'
import { AccountCard } from "../components/account/AccountCard";
import { AccountForm } from "../components/account/AccountForm";
import { BalanceCard } from "../components/shared/BalanceCard";
import { GetServerSideProps } from "next";
import { getAPIClient } from "../services/axios";
import { parseCookies } from "nookies";



export default function Accounts() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            <div>
              <AccountForm />
            </div>
          </Fade>
        </Modal>
      </AccountsPageHeader>

      <AccountsPageBody>
        <AccountsCardsContainer>
          <AccountCard account_name="NuBank" balance={200} icon={<Bank size={32} />} predicted_balance={200} />
          <AccountCard account_name="NuBank" balance={200} icon={<Bank size={32} />} predicted_balance={200} />
          <AccountCard account_name="NuBank" balance={200} icon={<Bank size={32} />} predicted_balance={200} />
          <AccountCard account_name="NuBank" balance={200} icon={<Bank size={32} />} predicted_balance={200} />
        </AccountsCardsContainer>

        <BalancesContainer>
          <BalanceCard icon={<Money size={32} />} iconColor='purple' title='Current Balance' value={300} to={'/'} />
          <BalanceCard icon={<Coin size={32} />} iconColor='green' title='Predicted Balance' value={300} to={'/'} />
        </BalancesContainer>
      </AccountsPageBody>
    </AccountsPageContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getAPIClient(ctx)
  const { '@MyBills:token': token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  await apiClient.get('/users')

  return {
    props: {}
  }
}




