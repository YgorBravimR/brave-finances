import { useState } from 'react'

import { incomesArrayApi } from '../../../../api/mockTransactions'
import { MyIncomesContainer, TransactionsListContainer } from './styles'

export function MyIncomes() {
  const [incomesArray, setIncomesArray] = useState(incomesArrayApi)
  const lastFiveIncomes = incomesArray.slice(0, 5)

  return (
    <MyIncomesContainer>
      <TransactionsListContainer>
        {lastFiveIncomes.map((income) => (
          <li key={income.description}>
            <span>{income.description}</span>
            <span>{income.date}</span>
            <strong>{income.price}</strong>
          </li>
        ))}
      </TransactionsListContainer>
    </MyIncomesContainer>
  )
}
