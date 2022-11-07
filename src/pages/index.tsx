import bottomImage from '../assets/dashboard-bottom-img.svg'
import Image from 'next/image'

import { DashboardContainer, BalanceCardContainer } from '../styles/pages/dashboard'
import { BalanceCard } from '../components/BalanceCard'

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';


export default function Dashboard() {
  return (
    <DashboardContainer>
      <div>
        <BalanceCardContainer>
          <BalanceCard
            title="Saldo atual"
            value="R$ 6.000,00"
            iconColor="#2296f3"
            icon={<AccountBalanceIcon />}
            to="/"
          />
          <BalanceCard
            title="Receitas"
            value="R$ 3.500,00"
            iconColor="#4caf50"
            icon={<AccountBalanceIcon />}
            to="/accounts"
          />
          <BalanceCard
            title="Despesas"
            value="R$ 2.052,44"
            iconColor="#f44336"
            icon={<AccountBalanceIcon />}
            to="/"
          />
          <BalanceCard
            title="Cartão de Crédito"
            value="R$ 11.378,81"
            iconColor="#00796b"
            icon={<AccountBalanceIcon />}
            to="/accounts"
          />
        </BalanceCardContainer>
      </div>
      <Image src={bottomImage} alt="" width={600} height={325} />
    </DashboardContainer>
  )

}
