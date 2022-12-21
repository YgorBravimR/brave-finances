import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { numberToCurrency } from '../../../../utils/formatter'
import { MyIncomesContainer, TransactionsListContainer } from './styles'

export function MyIncomes() {
  const { incomes } = useContext(TransactionsContext)

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
