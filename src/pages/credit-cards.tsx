import { Button } from "@mui/material";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { Coins, CreditCard, Money, Plus } from "phosphor-react";
import { useContext, useState } from "react";

import { creditCardsApiResponse } from "../api/creditCardAPI";
import { CreditCardsCard } from "../components/creditCards/creditCardsCards";
import { BalanceCard } from "../components/shared/BalanceCard";
import { BaseModal } from "../components/shared/Modals/BaseModal";
import { FormCreditCard } from "../components/shared/Modals/Forms/NewCreditCard";
import { CreditCardContext } from "../contexts/CreditCardContext";
import { TransactionsModalContext } from "../contexts/TransactionsModalContext";
import { getAPIClient } from "../services/axios";
import { BalancesContainer, CreditCardsCardsContainer, CreditCardsPageContainer, CreditCardsPageHeader } from "../styles/pages/credit-cards";

interface CreditCardsProps {
  id: string,
  user_id: string,
  flag: string,
  account_id: string,
  description: string,
  limit: number,
  close_date: number,
  due_date: number,
  enable: boolean,
  created_at: Date,
  updated_at: Date
}

export default function CreditCardss() {
  // const [creditCards, setCreditCards] = useState<CreditCardsProps[]>([])
  const [creditCardsArray, setCreditCardsArray] = useState(creditCardsApiResponse.data);

  const { handleCloseCreditCardModal, openCreditCardModal, setOpenCreditCardModal } = useContext(CreditCardContext)
  const { setTransactionType, setOpenCreditCardTransactionModal } = useContext(TransactionsModalContext)



  function handleOpenCreditCardModal() {
    setOpenCreditCardModal(true)
  }

  function handleOpenModalSetTransactionType() {
    setTransactionType("credit-card")
    setOpenCreditCardTransactionModal(true)
  }


  // useEffect(() => {
  //   async function getCreditCards() {
  //     try {
  //       const res = await api.get('/creditCards')
  //       console.log(res)

  //       if (res.data.status) {
  //         setCreditCards(res.data.data.creditCards)
  //       } else {
  //         // implement response's error
  //       }

  //       return res
  //     } catch (error) {
  //       // Set error
  //     }
  //   }
  //   getCreditCards()
  // }, [])


  return (
    <CreditCardsPageContainer>
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
        {creditCardsArray.cards.map((creditCard, i) => (
          <CreditCardsCard
            key={i}
            network_icon={creditCard.flag}
            card_name={creditCard.description}
            partial_value={creditCard.spent_value}
            closing_on={`January ${creditCard.closing_day}`}
            limit={creditCard.limit}
            onClick={handleOpenModalSetTransactionType}
            due_date={`December ${creditCard.due_date}`}
            avaiable_limit={creditCard.avaiable_limit}
            completed={creditCard.percent}
          />
        ))}
      </CreditCardsCardsContainer>
      <BalancesContainer>
        <BalanceCard icon={<CreditCard />} iconColor='#00796b' title='Best Credit Card to Buy' value={creditCardsArray.cards[2].description} to={'/credit-cards'} />
        <BalanceCard icon={<Coins />} iconColor='#00796b' title='Avaiable Limit' value={creditCardsArray.cards[2].limit} to={'/credit-cards'} />
        <BalanceCard icon={<Money />} iconColor='#00796b' title='Total amount' value={"R$ 4100,00"} to={'/credit-cards'} />
      </BalancesContainer>
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




