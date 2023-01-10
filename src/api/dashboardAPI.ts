interface Income {
  description: string
  price: string
  category: string
}

interface Expense {
  description: string
  price: string
  category: string
}

interface CcExpense {
  description: string
  price: string
  category: string
}

interface Props {
  data: {
    current_balance: string,
    incomes_sum: string,
    expenses_sum: string,
    credit_card_expenses_sum: string,
    transactions: {
      last_incomes: Income[]
      last_expenses: Expense[]
      last_cc_expenses: CcExpense[]
    }
  }
}

export const dashboardApiResponse: Props = {
  data: {
    current_balance: "R$ 1000,00",
    incomes_sum: "R$ 3000,00",
    expenses_sum: "R$ 1500,00",
    credit_card_expenses_sum: "R$ 500,00",
    transactions: {
      last_incomes: [
        {
          description: "Paycheck",
          price: "$1,500",
          category: "Salary"
        },
        {
          description: "Freelance Work",
          price: "$400",
          category: "Side Gig"
        },
        {
          description: "Investment Interest",
          price: "$100",
          category: "Investments"
        },
        {
          description: "Gift from Family",
          price: "$250",
          category: "Gifts"
        },
        {
          description: "Rental Income",
          price: "$800",
          category: "Rental Property"
        }
      ],
      last_expenses: [
        {
          description: "Coffee",
          price: "$5.50",
          category: "Food"
        },
        {
          description: "Rent",
          price: "$800",
          category: "Housing"
        },
        {
          description: "Gym Membership",
          price: "$50",
          category: "Fitness"
        },
        {
          description: "Concert Tickets",
          price: "$75",
          category: "Entertainment"
        },
        {
          description: "New Shoes",
          price: "$120",
          category: "Clothing"
        }
      ],
      // All credit cards
      last_cc_expenses: [
        {
          description: "Groceries",
          price: "$100",
          category: "Food"
        },
        {
          description: "Gas",
          price: "$50",
          category: "Transportation"
        },
        {
          description: "Restaurant Meal",
          price: "$75",
          category: "Food"
        },
        {
          description: "Clothing",
          price: "$200",
          category: "Shopping"
        },
        {
          description: "Gift",
          price: "$50",
          category: "Gifts"
        }
      ]
    }
  }
}
