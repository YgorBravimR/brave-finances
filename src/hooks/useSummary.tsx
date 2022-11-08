import { TransactionsContext } from "../contexts/TransactionsContext";
import { useMemo } from "react";
import { useTransactionsContext } from "./useTransactionsContext";

export function useSummary() {
  const { transactions } = useTransactionsContext()

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
