import { Button } from "@mui/material";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { Coins, CreditCard, Money, Plus } from "phosphor-react";
import { useContext } from "react";

import { CreditCardsCard } from "../components/creditCards/creditCardsCards";
import { BalanceCard } from "../components/shared/BalanceCard";
import { BaseModal } from "../components/shared/Modals/BaseModal";
import { FormCreditCard } from "../components/shared/Modals/Forms/NewCreditCard";
import { CreditCardContext } from "../contexts/CreditCardContext";
import { TransactionsContext } from "../contexts/TransactionsContext";
import { getAPIClient } from "../services/axios";
import { BalancesContainer, CreditCardsCardsContainer, CreditCardsPageContainer, CreditCardsPageHeader } from "../styles/pages/credit-cards";
import { theme } from "../styles/theme";

export default function CreditCards() {
  const { handleCloseCreditCardModal, openCreditCardModal, setOpenCreditCardModal } = useContext(CreditCardContext)
  const { setTransactionType, setOpenCreditCardTransactionModal } = useContext(TransactionsContext)
  const { creditCardsData, setCardInput } = useContext(CreditCardContext)

  function handleOpenCreditCardModal() {
    setOpenCreditCardModal(true)
  }

  function handleOpenModalSetTransactionType(card_id: string) {
    setCardInput(card_id)
    setTransactionType("credit-card")
    setOpenCreditCardTransactionModal(true)
  }

  const iconColor = theme.palette.creditCard.main

  return (
    <CreditCardsPageContainer>
      {
        creditCardsData &&
        <>
          <CreditCardsPageHeader>
            <h2>Credit Card</h2>
            <Button onClick={handleOpenCreditCardModal}>
              <Plus weight="bold" />
            </Button>
            <BaseModal closeModal={handleCloseCreditCardModal} openModal={openCreditCardModal}>
              <FormCreditCard />
            </BaseModal>
          </CreditCardsPageHeader>
          <CreditCardsCardsContainer>
            {creditCardsData.cards.map((card) => (
              <CreditCardsCard
                key={card.id}
                network_icon={card.flag}
                card_name={card.description}
                partial_value={card.spent_value}
                closing_on={`${card.close_date}`}
                limit={card.limit}
                onClick={() => (handleOpenModalSetTransactionType(card.id))}
                avaiable_limit={card.avaiable_limit}
                completed={card.percent}
              />
            ))}
          </CreditCardsCardsContainer>
          <BalancesContainer>
            <BalanceCard
              icon={<CreditCard />}
              iconColor={iconColor}
              title='Best Credit Card to Buy'
              value={creditCardsData.best_cc_to_buy}
              to={'/credit-cards'}
            />
            <BalanceCard
              icon={<Coins />}
              iconColor={iconColor}
              title='Avaiable Limit'
              value={creditCardsData.avaiable_limit}
              to={'/credit-cards'}
            />
            <BalanceCard
              icon={<Money />}
              iconColor={iconColor}
              title='Total amount'
              value={creditCardsData.total_amount}
              to={'/credit-cards'}
            />
          </BalancesContainer>
        </>
      }
    </CreditCardsPageContainer>
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




