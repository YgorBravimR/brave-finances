import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { numberToCurrency } from '../../../../utils/formatter'
import { MyExpensesContainer, TransactionsListContainer } from './styles'

export function MyExpenses() {
  const { outcomes } = useContext(TransactionsContext)

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
