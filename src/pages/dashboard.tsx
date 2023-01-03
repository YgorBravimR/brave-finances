import Image from 'next/image'
import { useContext } from 'react';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies';
import { useSummary } from '../hooks/useSummary';
import { getAPIClient } from '../services/axios';
import { AuthContext } from '../contexts/AuthContext';
import bottomImage from '../assets/dashboard-bottom-img.svg'
import { Button, Grid } from '@mui/material';
import { AccountBalance, PieChartOutline, ArrowUpwardOutlined, ArrowDownwardOutlined, ArrowForwardOutlined, AccountBalanceWallet, EmojiFlags } from '@mui/icons-material/';
import { DashboardContainer, BalanceCardContainer, MainCardsContent } from '../styles/pages/dashboard'
import { BalanceCard } from '../components/shared/BalanceCard';
import { ResumeCard } from '../components/shared/ResumeCard';
import { MyIncomes } from '../components/shared/ResumeCard/MyIncomes';
import { MyExpenses } from '../components/shared/ResumeCard/MyExpenses';

export default function Dashboard() {
  const { incomeSum, outcomeSum, total } = useSummary()
  const { user } = useContext(AuthContext)

  return (
    <DashboardContainer>
      <div>
        <h2>Dashboard</h2>
        <h3>Eu sou {user?.fullname}, meu email é {user?.email}</h3>
        <BalanceCardContainer>
          <BalanceCard
            title="Saldo atual"
            value={total}
            iconColor="#2296f3"
            icon={<AccountBalance />}
            to="/"
            tooltip="Esse aqui é apenas um teste do Saldo atual"
          />
          <BalanceCard
            title="Receitas"
            value={incomeSum}
            iconColor="#4caf50"
            icon={<ArrowUpwardOutlined />}
            to="/accounts"
            tooltip="Outro teste, dessa vez.. Receitas"
          />
          <BalanceCard
            title="Despesas"
            value={outcomeSum}
            iconColor="#f44336"
            icon={<ArrowDownwardOutlined />}
            to="/"
            tooltip="Testando.. depesas"
          />
          <BalanceCard
            title="Cartão de Crédito"
            value={11375.80}
            iconColor="#00796b"
            icon={<AccountBalanceWallet />}
            to="/accounts"
            tooltip="Por ultimo, um teste, Cartão de credito"
          />
          <Button endIcon={<ArrowForwardOutlined />}>Meu Desempenho</Button>
        </BalanceCardContainer>
        <MainCardsContent>
          <Grid container rowSpacing={4} columnSpacing={2}>
            <Grid item xs={6}>
              <ResumeCard
                cardTitle="Receitas"
                icon={< PieChartOutline />}
                title="Opa! Você ainda não possui receitas neste mês"
                subtitle="Adicione suas receitas no mês atual através do botão (+), para ver seus gráficos."
                cardContent={<MyIncomes />}
              />
            </Grid>
            <Grid item xs={6}>
              <ResumeCard
                cardTitle="Despesas"
                icon={< PieChartOutline />}
                title="Opa! Você ainda não possui um planejamento definido para este mês."
                subtitle="Melhore seu controle financeiro agora!"
                cardContent={<MyExpenses />}
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
              />
            </Grid>
          </Grid>
        </MainCardsContent>
      </div>
      <Image src={bottomImage} alt="" width={600} height={325} />
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
