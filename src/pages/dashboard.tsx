import { AccountBalance, AccountBalanceWallet, ArrowDownwardOutlined, ArrowForwardOutlined, ArrowUpwardOutlined, EmojiFlags, PieChartOutline } from '@mui/icons-material/';
import { Button, Grid } from '@mui/material';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { parseCookies } from 'nookies';
import { useContext, useState } from 'react';

import { dashboardApiResponse } from '../api/dashboardAPI';
import bottomImage from '../assets/dashboard-bottom-img.svg';
import { BalanceCard } from '../components/shared/BalanceCard';
import { ResumeCard } from '../components/shared/ResumeCard';
import { MyExpenses } from '../components/shared/ResumeCard/MyExpenses';
import { MyIncomes } from '../components/shared/ResumeCard/MyIncomes';
import { AuthContext } from '../contexts/AuthContext';
import { getAPIClient } from '../services/axios';
import { BalanceCardContainer, DashboardContainer, MainCardsContent } from '../styles/pages/dashboard';

export default function Dashboard() {
  const { user } = useContext(AuthContext)
  const [dashboardApi, setDashboardApi] = useState(dashboardApiResponse.data)

  return (
    <DashboardContainer>
      {user && (
        <>
          <div>
            <h2>Dashboard</h2>
            <BalanceCardContainer>
              <BalanceCard
                title="Actual Balance"
                value={dashboardApi.current_balance}
                iconColor="#2296f3"
                icon={<AccountBalance />}
                to="/transactions"
                tooltip="Your month balance"
              />
              <BalanceCard
                title="Incomes"
                value={dashboardApi.incomes_sum}
                iconColor="#4caf50"
                icon={<ArrowUpwardOutlined />}
                to="/transactions/incomes"
                tooltip="Your month incomes balance"
              />
              <BalanceCard
                title="Expenses"
                value={dashboardApi.expenses_sum}
                iconColor="#f44336"
                icon={<ArrowDownwardOutlined />}
                to="/transactions/expenses"
                tooltip="Your month expenses balance"
              />
              <BalanceCard
                title="Credit Cards"
                value={dashboardApi.credit_card_expenses_sum}
                iconColor="#00796b"
                icon={<AccountBalanceWallet />}
                to="/transactions/credit-cards"
                tooltip="Your month credit card invoices balance"
              />
              <Button endIcon={<ArrowForwardOutlined />}>Meu Desempenho</Button>
            </BalanceCardContainer>
            <MainCardsContent>
              <Grid container rowSpacing={4} columnSpacing={2}>
                <Grid item xs={6}>
                  <ResumeCard
                    cardTitle="Incomes"
                    icon={< PieChartOutline />}
                    title="Opa! Você ainda não possui receitas neste mês"
                    subtitle="Adicione suas receitas no mês atual através do botão (+), para ver seus gráficos."
                    cardContent={<MyIncomes />}
                    buttonText="See more"
                    destinationPage="/transactions/incomes"
                  />
                </Grid>
                <Grid item xs={6}>
                  <ResumeCard
                    cardTitle="Expenses"
                    icon={< PieChartOutline />}
                    title="Opa! Você ainda não possui um planejamento definido para este mês."
                    subtitle="Melhore seu controle financeiro agora!"
                    cardContent={<MyExpenses />}
                    buttonText="See more"
                    destinationPage="/transactions/expenses"
                  />
                </Grid>
                <Grid item xs={6}>
                  <ResumeCard
                    cardTitle="Seu planejamento financeiro"
                    icon={< EmojiFlags />}
                    title="Opa! Você ainda não possui um planejamento definido para este mês."
                    subtitle="Melhore seu controle financeiro agora!"
                    cardContent=""
                    emptyCard
                    buttonText="See more"
                    destinationPage="/dashboard"
                  />
                </Grid>
              </Grid>
            </MainCardsContent>
          </div>
          <Image src={bottomImage} alt="" width={600} height={325} />
        </>
      )}
    </DashboardContainer>
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
