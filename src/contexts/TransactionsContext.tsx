import { createContext, ReactNode, useState } from "react";

export interface ITransaction {
  description: string;
  type: "income" | "outcome" | "creditCard";
  price: number;
  category: string;
  // createdAt: string;
  date: string;
}

interface TransactionContextType {
  transactions: ITransaction[]
  incomes: ITransaction[]
  outcomes: ITransaction[]
  creditCard: ITransaction[]
  setTransactions: any  // Conferir tipo
}

interface TransactionsContextProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionContextProvider({ children }: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<ITransaction[]>([])

  const incomes = transactions.filter((transaction) => transaction.type === 'income')
  const outcomes = transactions.filter((transaction) => transaction.type === 'outcome')
  const creditCard = transactions.filter((transaction) => transaction.type === 'creditCard')

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions, incomes, outcomes, creditCard }}>
      {children}
    </TransactionsContext.Provider>
  )
}

