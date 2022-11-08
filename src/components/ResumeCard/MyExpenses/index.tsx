import { useSummary } from '../../../hooks/useSummary'
import { useTransactionsContext } from '../../../hooks/useTransactionsContext'
import { numberToCurrency } from '../../../utils/numberToCurrency'
import { MyExpensesContainer, TransactionsListContainer } from './styles'



export function MyExpenses() {
  const { outcomes } = useTransactionsContext()

  return (
    <MyExpensesContainer>
      <TransactionsListContainer>
        {outcomes.map((outcome, i) => (
          <li key={i}>
            <span>{outcome.description}</span>
            <strong>{numberToCurrency(outcome.price)}</strong>
          </li>
        ))}
      </TransactionsListContainer>
    </MyExpensesContainer>
  )
}