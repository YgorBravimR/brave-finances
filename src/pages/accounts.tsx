import { Button } from "@mui/material";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { Bank, Coin, Money, Plus } from "phosphor-react";
import { useContext } from "react";

import { AccountCard } from "../components/account/AccountCard";
import { BalanceCard } from "../components/shared/BalanceCard";
import { BaseModal } from "../components/shared/Modals/BaseModal";
import { NewAccountForm } from "../components/shared/Modals/Forms/NewAccountModal";
import { AccountsContext } from "../contexts/AccountsContext";
import { TransactionsContext } from "../contexts/TransactionsContext";
import { getAPIClient } from "../services/axios";
import { AccountsCardsContainer, AccountsPageBody, AccountsPageContainer, AccountsPageHeader, BalancesContainer } from '../styles/pages/accounts'
import { theme } from "../styles/theme";

export default function Accounts() {
  const {setOpenTransactionModal, setTransactionType} = useContext(TransactionsContext)
  const {
    setAccount,
    openNewAccountModal,
    handleCloseNewAccountModal,
    accountsData,
    setOpenNewAccountModal
  } = useContext(AccountsContext)

  function openTransactionModalSetAccount(account_id: string) {
    setAccount(account_id)
    setTransactionType("expense")
    setOpenTransactionModal(true)
  }

  function handleOpenNewAccountModal() {
    setOpenNewAccountModal(true)
  }

  const iconSize = 32

  return (
    <AccountsPageContainer>
      {accountsData &&
        <>
          <AccountsPageHeader>
            <h2>Accounts</h2>
          <Button onClick={handleOpenNewAccountModal}>
              <Plus weight="bold" />
            </Button>
            <BaseModal openModal={openNewAccountModal} closeModal={handleCloseNewAccountModal}>
              <NewAccountForm />
            </BaseModal>
          </AccountsPageHeader>
          <AccountsPageBody>
            <AccountsCardsContainer>
              {accountsData.accounts.map((account) => (
                <AccountCard
                  key={account.id}
                  account_name={account.account_name}
                  balance={account.current_balance}
                  icon={<Bank size={32} />}
                  predicted_balance={account.predicted_balance}
                  onClick={() => (openTransactionModalSetAccount(account.id))}
                />
              ))}
            </AccountsCardsContainer>
            <BalancesContainer>
              <BalanceCard icon={<Money size={iconSize} />} iconColor={theme.palette.primary.main} title='Current Balance' value={accountsData.current_balance} to={'/dashboard'} />
              <BalanceCard icon={<Coin size={iconSize} />} iconColor={theme.palette.secondary.main} title='Predicted Balance' value={accountsData.predicted_valance} to={'/dashboard'} />
            </BalancesContainer>
          </AccountsPageBody>
        </>
      }
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






