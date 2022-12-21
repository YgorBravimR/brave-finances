import { useContext, useMemo } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = useMemo(
    () =>
      transactions.reduce(
        (acc, transaction) => {
          if (transaction.type === 'income') {
            acc.incomeSum += transaction.price
            acc.total += transaction.price
          } else if (transaction.type === 'outcome') {
            acc.outcomeSum += transaction.price
            acc.total -= transaction.price
          }

          return acc
        },
        {
          incomeSum: 0,
          outcomeSum: 0,
          total: 0,
        }
      ),
    [transactions]
  )

  return summary
}
