import { numberToCurrency } from '../../../../utils/formatter'
import { MyExpensesContainer, TransactionsListContainer } from './styles'

export function MyExpenses() {

  return (
    <MyExpensesContainer>
      <TransactionsListContainer>

        Take it from API
        {/* {outcomes.map((outcome, i) => (
          <li key={i}>
            <span>{outcome.description}</span>
            <strong>{numberToCurrency(outcome.price)}</strong>
          </li>
        ))} */}
      </TransactionsListContainer>
    </MyExpensesContainer>
  )
}
