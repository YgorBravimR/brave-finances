import { createContext, ReactNode, useState } from "react";

export interface ITransaction {
  description: string;
  type: "income" | "outcome" | "creditCard";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: ITransaction[]
  incomes: ITransaction[]
  outcomes: ITransaction[]
  creditCard: ITransaction[]
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
      createdAt: "",
    },
    {
      description: "Vendas",
      price: 25000,
      category: "Salário",
      type: "income",
      createdAt: "",
    },
    {
      description: "Gastos Pessoais",
      price: 12000,
      category: "Salário",
      type: "outcome",
      createdAt: "",
    },
    {
      description: "Recebido",
      price: 2000,
      category: "Salário",
      type: "income",
      createdAt: "",
    },
    {
      description: "PC Novo",
      price: 3400,
      category: "Salário",
      type: "outcome",
      createdAt: "",
    },
    {
      description: "Recebido",
      price: 2222,
      category: "Salário",
      type: "income",
      createdAt: "",
    },
  ])

  const incomes = transactions.filter((transaction) => transaction.type === 'income')
  const outcomes = transactions.filter((transaction) => transaction.type === 'outcome')
  const creditCard = transactions.filter((transaction) => transaction.type === 'creditCard')

  return (
    <TransactionsContext.Provider value={{ transactions, incomes, outcomes, creditCard }}>
      {children}
    </TransactionsContext.Provider>
  )
}

