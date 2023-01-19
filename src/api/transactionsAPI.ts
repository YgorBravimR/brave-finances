
interface Transaction {
  status: string,
  date: string,
  description: string,
  category: string,
  amount: string,
  type: 'income' | 'expense' | 'credit_card' | 'transfer',
  account: string,
  tags: string[];
  credit_card: string | null
}

interface Props {
  data: {
    transactions: Transaction[],
    current_balance: string
    incomes_balance: string,
    expenses_balance: string,
    month_balance: string,
  }
}

export const transactionsApiResponse: Props = {
  data: {
    current_balance: "R$ 2000,00",
    incomes_balance: "R$ 2500,00",
    expenses_balance: "R$ 1000,00",
    month_balance: "R$ 1700,00",
    transactions: [
      {
        status: 'pending',
        date: '2022-01-06',
        description: 'Paycheck',
        category: 'income',
        amount: '2000',
        type: 'income',
        account: 'Checking',
        tags: ['salary', 'work'],
        credit_card: null // null if type != credit_card
      }
    ],
  }
}

export const transactionsTableApiResponse = {
  data: {
    transactions: [
      {
        status: 'pending',
        date: '2022-01-06',
        description: 'Paycheck',
        category: 'income',
        amount: '2000',
        type: 'income',
        account: 'Checking',
        tags: ['salary', 'work']
      }
    ]
  }
}
