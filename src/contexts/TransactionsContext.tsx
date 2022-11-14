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
  const [transactions, setTransactions] = useState<ITransaction[]>([
    {
      description: "Salário",
      price: 3000,
      category: "Salário",
      type: "income",
      // createdAt: "",
      date: "2022-07-18"
    },
    {
      description: "Vendas",
      price: 25000,
      category: "Salário",
      type: "income",
      // createdAt: "",
      date: "2022-07-18"

    },
    {
      description: "Gastos Pessoais",
      price: 12000,
      category: "Salário",
      type: "outcome",
      // createdAt: "",
      date: "2022-07-18"

    },
    {
      description: "Recebido",
      price: 2000,
      category: "Salário",
      type: "income",
      // createdAt: "",
      date: "2022-07-18"

    },
    {
      description: "PC Novo",
      price: 3400,
      category: "Salário",
      type: "outcome",
      // createdAt: "",
      date: "2022-07-18"

    },
    {
      description: "Recebido",
      price: 2222,
      category: "Salário",
      type: "income",
      // createdAt: "",
      date: "2022-07-18"
    },
  ])

  const incomes = transactions.filter((transaction) => transaction.type === 'income')
  const outcomes = transactions.filter((transaction) => transaction.type === 'outcome')
  const creditCard = transactions.filter((transaction) => transaction.type === 'creditCard')

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions, incomes, outcomes, creditCard }}>
      {children}
    </TransactionsContext.Provider>
  )
}

