import { useSummary } from '../../../hooks/useSummary'
import { useTransactionsContext } from '../../../hooks/useTransactionsContext'
import { numberToCurrency } from '../../../utils/numberToCurrency'
import { MyIncomesContainer, TransactionsListContainer } from './styles'



export function MyIncomes() {
  const { incomes } = useTransactionsContext()

  return (
    <MyIncomesContainer>
      <TransactionsListContainer>
        {incomes.map((income, i) => (
          <li key={i}>
            <span>{income.description}</span>
            <strong>{numberToCurrency(income.price)}</strong>
          </li>
        ))}
      </TransactionsListContainer>
    </MyIncomesContainer>
  )
}