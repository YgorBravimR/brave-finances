import { Button } from "@mui/material";
import { Plus, CreditCard, Coins, Money } from "phosphor-react";
import { CreditCardsCard } from "../components/creditCards/creditCardsCards";
import { BalanceCard } from "../components/shared/BalanceCard";
import { BalancesContainer, CreditCardsPageContainer, CreditCardsPageHeader, CreditCardsCardsContainer } from "../styles/pages/credit-cards";
import { api, getAPIClient } from "../services/axios";
import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";

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
  const [creditCards, setCreditCards] = useState<CreditCardsProps[]>([])

  useEffect(() => {
    async function getCreditCards() {
      try {
        const res = await api.get('/creditCards')

        if (res.data.status) {
          setCreditCards(res.data.data.creditCards)
        } else {
          // implement response's error
        }

        return res
      } catch (error) {
        // Set error
      }
    }
    getCreditCards()
  }, [])

  return (
    <CreditCardsPageContainer>
      <CreditCardsPageHeader>
        <h2>Credit Card</h2>
        <Button>
          <Plus weight="bold" />
        </Button>
      </CreditCardsPageHeader>
      <CreditCardsCardsContainer>
        {creditCards.map((creditCard) => (
          <CreditCardsCard
            key={creditCard.id}
            network_icon={creditCard.flag}
            card_name={creditCard.description}
            partial_value={3000}
            closing_on={`January ${creditCard.close_date}`}
            limit={creditCard.limit}
            due_date={`January ${creditCard.due_date}`} />
        ))}
      </CreditCardsCardsContainer>
      <BalancesContainer>
        <BalanceCard icon={<CreditCard />} iconColor='#00796b' title='Best CreditCard tp Buy' value={300} to={'/credit-cards'} />
        <BalanceCard icon={<Coins />} iconColor='#00796b' title='Avaiable Limit' value={300} to={'/credit-cards'} />
        <BalanceCard icon={<Money />} iconColor='#00796b' title='Total amount' value={300} to={'/credit-cards'} />
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




