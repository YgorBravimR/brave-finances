import { useState } from 'react'

import { expensesArrayApi } from '../../../../api/mockTransactions'
import { MyExpensesContainer, TransactionsListContainer } from './styles'

export function MyExpenses() {
  const [expensesArray, setExpensesArray] = useState(expensesArrayApi)
  const lastFiveExpenses = expensesArray.slice(0, 5)

  return (
    <MyExpensesContainer>
      <TransactionsListContainer>
        {lastFiveExpenses.map((expense) => (
          <li key={expense.description}>
            <span>{expense.description}</span>
            <span>{expense.date}</span>
            <strong>{expense.price}</strong>
          </li>
        ))}
      </TransactionsListContainer>
    </MyExpensesContainer>
  )
}
