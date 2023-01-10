import { Button } from "@mui/material";
import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { ArrowDown, ArrowUp, Bank, Plus, Scales } from "phosphor-react";
import { useState } from "react";

import { transactionsApiResponse } from "../../api/transactionsAPI";
import TransactionsTable from "../../components/dashboard/TableTransactions";
import { BalanceCard } from "../../components/shared/BalanceCard";
import { getAPIClient } from "../../services/axios";
import { BalancesContainer, TableContainer, TransactionsPageContainer, TransactionsPageHeader } from "../../styles/pages/transactions";

export default function Transactions() {
  const [transactionsApi, setTransactionsApi] = useState(transactionsApiResponse.data)

  return (
    <TransactionsPageContainer>
      <TransactionsPageHeader>
        <h2>Transactions</h2>
        <Button>
          <Plus weight="bold" />
        </Button>
      </TransactionsPageHeader>

      <BalancesContainer>
        <BalanceCard icon={<Bank />} iconColor='#2296f3' title='Current Balance' value={transactionsApi.current_balance} to={'/'} />
        <BalanceCard icon={<ArrowUp />} iconColor='#4caf50' title='Incomes' value={transactionsApi.incomes_balance} to={'/'} />
        <BalanceCard icon={<ArrowDown />} iconColor='#f44336' title='Expenses' value={transactionsApi.expenses_balance} to={'/'} />
        <BalanceCard icon={<Scales />} iconColor='#00796b' title='Monthly balance' value={transactionsApi.month_balance} to={'/'} />
      </BalancesContainer>

      <TableContainer>
        <TransactionsTable />
      </TableContainer>
    </TransactionsPageContainer>
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
