import bottomImage from '../assets/dashboard-bottom-img.svg'
import Image from 'next/image'

import { DashboardContainer, BalanceCardContainer, MainCardsContent } from '../styles/pages/dashboard'
import { BalanceCard } from '../components/BalanceCard'

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

import { Button, Grid } from '@mui/material';
import { ResumeCard } from '../components/ResumeCard';

import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';

import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import { MyIncomes } from '../components/ResumeCard/MyIncomes';
import { MyExpenses } from '../components/ResumeCard/MyExpenses';

import { useSummary } from '../hooks/useSummary';
import { numberToCurrency } from '../utils/numberToCurrency';

export default function Dashboard() {
  const { incomeSum, outcomeSum, total } = useSummary()

  return (
    <DashboardContainer>
      <div>
        <BalanceCardContainer>
          <BalanceCard
            title="Saldo atual"
            value={numberToCurrency(total)}
            iconColor="#2296f3"
            icon={<AccountBalanceIcon />}
            to="/"
            tooltip="Esse aqui é apenas um teste do Saldo atual"
          />
          <BalanceCard
            title="Receitas"
            value={numberToCurrency(incomeSum)}
            iconColor="#4caf50"
            icon={<ArrowUpwardOutlinedIcon />}
            to="/accounts"
            tooltip="Outro teste, dessa vez.. Receitas"
          />
          <BalanceCard
            title="Despesas"
            value={numberToCurrency(outcomeSum)}
            iconColor="#f44336"
            icon={<ArrowDownwardOutlinedIcon />}
            to="/"
            tooltip="Testando.. depesas"
          />
          <BalanceCard
            title="Cartão de Crédito"
            value="R$ 11.378,81"
            iconColor="#00796b"
            icon={<AccountBalanceWalletIcon />}
            to="/accounts"
            tooltip="Por ultimo, um teste, Cartão de credito"
          />
          <Button endIcon={<ArrowForwardOutlinedIcon />}>Meu Desempenho</Button>
        </BalanceCardContainer>
        <MainCardsContent>
          <Grid container rowSpacing={4} columnSpacing={2}>
            <Grid item xs={6}>
              <ResumeCard
                cardTitle="Receitas"
                icon={< PieChartOutlineIcon />}
                title="Opa! Você ainda não possui receitas neste mês"
                subtitle="Adicione suas receitas no mês atual através do botão (+), para ver seus gráficos."
                cardContent={<MyIncomes />}
              />
            </Grid>
            <Grid item xs={6}>
              <ResumeCard
                cardTitle="Despesas"
                icon={< PieChartOutlineIcon />}
                title="Opa! Você ainda não possui um planejamento definido para este mês."
                subtitle="Melhore seu controle financeiro agora!"
                cardContent={<MyExpenses />}
              />
            </Grid>
            <Grid item xs={6}>
              <ResumeCard
                cardTitle="Seu planejamento financeiro"
                icon={< EmojiFlagsIcon />}
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
