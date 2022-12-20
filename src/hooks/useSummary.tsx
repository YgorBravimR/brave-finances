import { TransactionsContext } from "../contexts/TransactionsContext";
import { useContext, useMemo } from "react";

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "income") {
          acc.incomeSum += transaction.price;
          acc.total += transaction.price;
        } else if (transaction.type === "outcome") {
          acc.outcomeSum += transaction.price;
          acc.total -= transaction.price;
        }

        return acc;
      },
      {
        incomeSum: 0,
        outcomeSum: 0,
        total: 0,
      }
    );
  }, [transactions]);

  return summary;
}
